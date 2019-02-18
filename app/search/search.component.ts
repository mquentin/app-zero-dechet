import { Component, OnInit, OnDestroy } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

import { MapboxViewApi } from "nativescript-mapbox";
import { MarkerService } from "../shared";

@Component({
    selector: "Search",
    moduleId: module.id,
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit, OnDestroy {

    private map: MapboxViewApi;
    private markers: any;

    private lat = 45.7578;
    private lng = 4.8325;

    constructor(private markerService: MarkerService) {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        this.markers = this.markerService.getMarkers();
    }

    ngOnDestroy(): void {
        // Init your component properties here.
        this.destroyMapBox();
    }

    destroyMapBox(): void {
        console.log("destroyMapBox()");
        this.map.destroy();
    }

    onDrawerButtonTap(): void {
        const sideDrawer = <RadSideDrawer>app.getRootView();
        sideDrawer.showDrawer();
    }

    onMapReady(args): void {
        this.map = args.map;
        this.map.addMarkers(this.markers);

    }
}
