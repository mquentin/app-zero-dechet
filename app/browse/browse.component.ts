import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

import { DechetsService } from "../shared/dechets.service";

@Component({
    selector: "Browse",
    moduleId: module.id,
    templateUrl: "./browse.component.html",
    providers: [DechetsService]
})
export class BrowseComponent implements OnInit {
    isLoading = false;
    listLoaded = false;

    constructor(private store: DechetsService) {
        this.isLoading = true;
        this.store.load()
            .then(() => {
                this.isLoading = false;
                this.listLoaded = true;

            }).catch(() => {
            alert("An error occurred loading your grocery list.");
        });
    }

    ngOnInit(): void {

    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    load() {

    }

}
