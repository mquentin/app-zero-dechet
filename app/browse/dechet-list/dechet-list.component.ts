import { Component, ChangeDetectionStrategy, EventEmitter, Input, Output } from "@angular/core";
import * as utils from "utils/utils";

import { RouterExtensions } from "nativescript-angular/router";

import { DechetsService } from "../../shared/dechets.service";

import { alert } from "../../shared";

declare var UIColor: any;

@Component({
    selector: "gr-dechet-list",
    moduleId: module.id,
    templateUrl: "./dechet-list.component.html",
    styleUrls: ["./dechet-list.component.css"],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class DechetListComponent {
    @Input() showDeleted: boolean;
    @Input() row;
    @Output() loading = new EventEmitter();
    @Output() loaded = new EventEmitter();

    public store: DechetsService;
    listLoaded = false;

    constructor(store: DechetsService, private routerExtensions: RouterExtensions) {
        this.store = store;
    }

    // Based on https://github.com/NativeScript/sample-Groceries/blob/master/app/groceries/grocery-list/grocery-list.component.ts
    load() {
        this.loading.next("");
        this.store.load()
            .subscribe(
                () => {
                    this.loaded.next("");
                    this.listLoaded = true;
                },
                () => {
                    alert("An error occurred loading your grocery list.");
                }
            );
    }

    // The following trick makes the background color of each cell
    // in the UITableView transparent as it’s created.
    makeBackgroundTransparent(args) {
        let cell = args.ios;
        if (cell) {
            // support XCode 8
            cell.backgroundColor = utils.ios.getter(UIColor, UIColor.clearColor);
        }
    }

    onNavItemTap(navItemRoute: string): void {
        this.routerExtensions.navigate([navItemRoute], {
            transition: {
                name: "fade"
            }
        });
    }
}

