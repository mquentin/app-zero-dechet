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
    myItem: BehaviorSubject<Dechet> = new BehaviorSubject<Dechet>(null);

    private allItems: Array<Dechet> = [];
    private oneItem: Dechet;
    collectionDechets: any;

    constructor(private zone: NgZone, private http: HttpClient, private dataStoreService: DataStoreService, private userService: UserService) {
        this.collectionDechets = dataStoreService.collection<Dechet>("dechets", DataStoreType.Auto);
    }

    baseUrl = BackendService.apiUrl + "/dechets";

    // Based on https://github.com/NativeScript/sample-Groceries/blob/master/app/groceries/shared/grocery.service.ts
    load() {
        let loadUrl = this.baseUrl + "?query={\"valideParAdmin\":1}";
        return this.http.get(loadUrl, {
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
                    this.publishLoadUpdates();
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
                    this.publishLoadUpdates();
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
                this.publishLoadUpdates();
            });
        }).catch((error) => {
            console.log("DechetsService load error", error);
            this.handleErrors(error);
        });*/
    }

    loadOne(id: string) {
        let loadOneUrl = this.baseUrl + "/" + id;
        console.log("loadOneUrl", loadOneUrl);
        return this.http.get(loadOneUrl, {
            headers: BackendService.getCommonHeaders()
        })
            .pipe(
                map((dataDechet: any) => {
                    this.oneItem = new Dechet(
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
                    );
                    this.publishLoadOneUpdates();
                }),
                catchError(this.handleErrors)
            );
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
                    this.publishLoadUpdates();
                }),
                catchError(this.handleErrors)
            );
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