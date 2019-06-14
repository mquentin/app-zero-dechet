import { Injectable, NgZone } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable, BehaviorSubject } from "rxjs";

import { DataStoreService, DataStoreType } from "kinvey-nativescript-sdk/angular";
import { UserService } from "kinvey-nativescript-sdk/angular";
import { BackendService } from "./backend.service";

import { map, catchError } from "rxjs/operators";

import { Dechet } from "./dechet.model";

@Injectable()
export class DechetsService {
    items: BehaviorSubject<Array<Dechet>> = new BehaviorSubject<Array<Dechet>>([]);

    private allItems: Array<Dechet> = [];
    collectionDechets: any;

    constructor(private zone: NgZone, private http: HttpClient, private dataStoreService: DataStoreService, private userService: UserService) {
        this.collectionDechets = dataStoreService.collection<Dechet>("dechets", DataStoreType.Auto);
    }

    baseUrl = BackendService.apiUrl + "/dechets?query={\"valideParAdmin\":1}";

    // Based on https://github.com/NativeScript/sample-Groceries/blob/master/app/groceries/shared/grocery.service.ts
    load() {
        return this.http.get(this.baseUrl, {
            headers: BackendService.getCommonHeaders()
        })
            .pipe(
                map((data: any[]) => {
                    this.allItems = data
                        .map(
                            (dataDechet: Dechet) => new Dechet(
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
                }),
                catchError(this.handleErrors)
            );

        /*const query = new Query();
        query.equalTo("valideParAdmin", 1);
        this.collectionDechets.find().subscribe((data) => {
                console.log("DechetsService", data);

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
            }, (error) => {
                console.log("DechetsService load error", error);
                this.handleErrors;
            });*/

        /*let promise = Promise.resolve();
        return promise.then(() => {
            const query = new Query();
            query.equalTo("valideParAdmin", 1);
            let stream = this.collectionDechets.find(query);
            return stream.toPromise();
        }).then((data) => {

            console.log("DechetsService", data);

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
            console.log("DechetsService load error", error);
            this.handleErrors(error);
        });*/
    }

    add(name: string) {
        let newDechet = new Dechet(name, this.userService.getAuthenticatedUserId(), false);
        return this.http.post(
            this.baseUrl,
            JSON.stringify({Name: name}),
            {headers: BackendService.getCommonHeaders()}
        )
            .pipe(
                map((data: any) => {
                    this.allItems.unshift(newDechet);
                    this.publishUpdates();
                }),
                catchError(this.handleErrors)
            );
    }

    private publishUpdates() {
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