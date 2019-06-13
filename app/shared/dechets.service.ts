import { Injectable, NgZone } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { BehaviorSubject } from "rxjs";

import { DataStoreService, DataStoreType } from "kinvey-nativescript-sdk/angular";
import { UserService } from "kinvey-nativescript-sdk/angular";

import { Dechet } from "./dechet.model";

@Injectable()
export class DechetsService {
    items: BehaviorSubject<Array<Dechet>> = new BehaviorSubject<Array<Dechet>>([]);

    private allItems: Array<Dechet> = [];
    private datastore = this.dataStoreService.collection<Dechet>("dechets", DataStoreType.Auto);

    constructor(private zone: NgZone, private http: HttpClient, private dataStoreService: DataStoreService, private userService: UserService) { }

    load() {
        let promise = Promise.resolve();
        return promise.then(() => {
            let stream = this.datastore.find();
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
                        dataDechet.rechercheValorisation,
                        dataDechet.astuce,
                        dataDechet.solutionOuverte,
                        dataDechet.solutionConsigne,
                        dataDechet.solutionValorisation,
                        dataDechet.solutionRecyclage,
                        dataDechet.solutionVrac
                    )
                );
                this.publishUpdates();
            });
        }).catch((error) => {
            this.handleErrors;
        });
    }

    add(name: string) {
        let newDechet = new Dechet(name, this.userService.getAuthenticatedUserId(), false);
        return this.datastore.save({ name: name })
            .then((data) => {
                this.allItems.unshift(newDechet);
                this.publishUpdates();
            })
            .catch(this.handleErrors);
    }

    private publishUpdates() {
        // Make sure all updates are published inside NgZone so that change detection is triggered if needed
        this.zone.run(() => {
            // must emit a *new* value (immutability!)
            const newVal = [...this.allItems];
            this.items.next(newVal);

            console.log("publishUpdates", this.items);
        });
    }

    private handleErrors(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}