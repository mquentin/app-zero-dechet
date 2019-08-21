import { Component, OnInit } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import { TabView } from "tns-core-modules/ui/tab-view";
import * as app from "tns-core-modules/application";
import { alert } from "../shared";
import { DechetsService } from "../shared/dechets.service";
import { SolutionsService } from "../shared/solutions.service";
import { RouterExtensions } from "nativescript-angular/router";
import { ActivatedRoute } from "@angular/router";

@Component({
    selector: "zd-dechet",
    moduleId: module.id,
    providers: [SolutionsService],
    templateUrl: "./dechet.component.html"
})
export class DechetComponent implements OnInit {

    public tabSelectedIndex: number;

    public dechetStore: DechetsService;
    public solutionStore: SolutionsService;
    public dechetId: string = null;

    constructor(private route: ActivatedRoute, private routerExtensions: RouterExtensions, dechetStore: DechetsService, solutionStore: SolutionsService) {
        this.tabSelectedIndex = 0;

        this.dechetStore = dechetStore;
        this.solutionStore = solutionStore;
        this.route.params.subscribe((params) => {
            this.dechetId = params["id"];

            if (this.dechetId) {
                this.dechetStore.load(this.dechetId)
                    .then(() => {

                    }).catch(() => {
                    alert("An error occurred loading your grocery list.");
                });

                this.solutionStore.load(this.dechetId)
                    .then(() => {

                    }).catch(() => {
                    alert("An error occurred loading your solution list.");
                });
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

    changeTab() {
        if (this.tabSelectedIndex === 0) {
            this.tabSelectedIndex = 1;
        } else if (this.tabSelectedIndex === 1) {
            this.tabSelectedIndex = 2;
        } else if (this.tabSelectedIndex === 2) {
            this.tabSelectedIndex = 0;
        }
    }
}
