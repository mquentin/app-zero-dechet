import { Injectable, NgZone } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";

import { Kinvey } from "kinvey-nativescript-sdk";
import { Dechet } from "./dechet.model";

@Injectable()
export class DechetsService {
    items: BehaviorSubject<Array<Dechet>> = new BehaviorSubject<Array<Dechet>>([]);
    myItem: BehaviorSubject<Dechet> = new BehaviorSubject<Dechet>(null);

    private allItems: Array<Dechet> = [];
    private oneItem: Dechet;
    private dechetStore = Kinvey.DataStore.collection<Dechet>("dechets");

    constructor(private zone: NgZone, private http: HttpClient) {
    }

    load(id?: string): Promise<any> {
        let promise = Promise.resolve();

        // Load one
        if (id) {
            let inputDechet: Dechet = null;
            if (id && this.allItems) {
                inputDechet = this.allItems.find(function (d) {
                    return d._id === id;
                });
            }

            if (inputDechet) {
                this.oneItem = inputDechet;
                this.publishLoadOneUpdates();
                return promise;
            } else {
                return promise.then(() => {
                    const sortQuery = new Kinvey.Query();
                    sortQuery.equalTo("valideParAdmin", 1);
                    sortQuery.equalTo("_id", id);
                    const stream = this.dechetStore.find(sortQuery);
                    return stream.toPromise();
                }).then((data) => {
                    data.forEach((dataDechet) => {
                        this.oneItem = new Dechet(
                            dataDechet.nom,
                            dataDechet.auteur,
                            dataDechet.cvalideParAdmin,
                            dataDechet._id,
                            dataDechet.astuce,
                            dataDechet.content
                        );
                        this.publishLoadOneUpdates();
                    });
                }).catch((error) => {
                    this.handleErrors;
                });
            }
        }
        // Load all
        else {
            return promise.then(() => {
                const sortQuery = new Kinvey.Query();
                sortQuery.equalTo("valideParAdmin", 1);
                const stream = this.dechetStore.find(sortQuery);
                return stream.toPromise();
            }).then((data) => {
                this.allItems = [];
                data.forEach((dataDechet) => {
                    this.allItems.push(
                        new Dechet(
                            dataDechet.nom,
                            dataDechet.auteur,
                            dataDechet.cvalideParAdmin,
                            dataDechet._id,
                            dataDechet.astuce,
                            dataDechet.content
                        )
                    );
                    this.publishLoadUpdates();
                });
            }).catch((error) => {
                this.handleErrors;
            });
        }
    }

    private publishLoadUpdates() {
        // Make sure all updates are published inside NgZone so that change detection is triggered if needed
        this.zone.run(() => {
            // must emit a *new* value (immutability!)
            const newVal = [...this.allItems];
            this.items.next(newVal);
        });
    }

    private publishLoadOneUpdates() {
        // Make sure all updates are published inside NgZone so that change detection is triggered if needed
        this.zone.run(() => {
            // must emit a *new* value (immutability!)
            this.myItem.next(this.oneItem);
        });
    }

    private handleErrors(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}