import { Injectable, NgZone } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";

import * as Kinvey from "kinvey-nativescript-sdk";
import { Solution } from "./solution.model";

@Injectable()
export class SolutionsService {
    items: BehaviorSubject<Array<Solution>> = new BehaviorSubject<Array<Solution>>([]);

    private allItems: Array<Solution> = [];
    private solutionStore = Kinvey.DataStore.collection("solutions");

    constructor(private zone: NgZone, private http: HttpClient) {
    }

    load(dechetId: string, type?: string): Promise<any> {
        let promise = Promise.resolve();
        return promise.then(() => {
            const sortQuery = new Kinvey.Query();
            sortQuery.equalTo("valideParAdmin", 1);
            sortQuery.equalTo("dechetId", dechetId);
            if (type) {
                sortQuery.equalTo("type", type);
            }
            const stream = this.solutionStore.find(sortQuery);
            return stream.toPromise();
        }).then((data) => {
            this.allItems = [];
            data.forEach((dataSolution) => {
                this.allItems.push(
                    new Solution(
                        dataSolution.nom,
                        dataSolution.auteur,
                        dataSolution.cvalideParAdmin,
                        dataSolution._id,
                        dataSolution.type,
                        dataSolution.dechetId,
                        dataSolution.localisationSolution,
                        dataSolution.content,
                    )
                );
                this.publishLoadUpdates();
            });
        }).catch((error) => {
            this.handleErrors;
        });
    }

    private publishLoadUpdates() {
        // Make sure all updates are published inside NgZone so that change detection is triggered if needed
        this.zone.run(() => {
            // must emit a *new* value (immutability!)
            const newVal = [...this.allItems];
            this.items.next(newVal);
        });
    }

    private handleErrors(error: Response) {
        console.log(error);
        return Observable.throw(error);
    }
}
