import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";
import { alert } from "../shared";
import { DechetsService } from "../shared/dechets.service";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "Dechet",
    moduleId: module.id,
    templateUrl: "./dechet.component.html",
    providers: [DechetsService]
})
export class DechetComponent implements OnInit {

    public store: DechetsService;
    public dechetId: string = null;

    constructor(private route: ActivatedRoute, private routerExtensions: RouterExtensions, store: DechetsService) {
        this.store = store;
        this.route.params.subscribe((params) => {
            this.dechetId = params["id"];

            if (this.dechetId) {
                this.store.loadOne(this.dechetId)
                    .subscribe(
                        () => {
                        },
                        () => {
                            alert("An error occurred loading your grocery list.");
                        }
                    );
            }

        });
    }

    ngOnInit(): void {
        // Init your component properties here.
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    goBack(): void {
        this.routerExtensions.back();
    }
}
