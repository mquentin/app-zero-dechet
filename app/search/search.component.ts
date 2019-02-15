import { Component, OnInit, OnDestroy } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

import { MapboxViewApi } from "nativescript-mapbox";

@Component({
    selector: "Search",
    moduleId: module.id,
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit, OnDestroy {

    private map: MapboxViewApi;

    constructor() {
        // Use the component constructor to inject providers.
    }

    ngOnInit(): void {
        // Init your component properties here.
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
        this.map.addMarkers([
                {
                    id: 1,
                    lat: 42.624189,
                    lng: 23.372106,
                    title: "DevReach 2017",
                    subtitle: "Such an awesome little conference",
                    onTap: () => {
                        console.log("DevReach 2017 was tapped");
                    },
                    onCalloutTap: () => {
                        console.log("DevReach 2017 callout tapped");
                    }
                },
                {
                    id: 3,
                    lat: 52.1851585,
                    lng: 5.3974241,
                    title: "Eddy's home",
                    subtitle: "Tap to show directions (with waypoints)",
                    onTap: () => console.log("Eddy's home was tapped"),
                    onCalloutTap: () => {
                        console.log("Eddy's home was tapped onCalloutTap");
                    }
                },
                {
                    id: 4,
                    lat: 43.421834,
                    lng: 24.086096,
                    title: "Dangerous truckdriver",
                    subtitle: "Tap to show directions",
                    onTap: () => {
                        console.log("Truck 1 was tapped");
                    },
                    onCalloutTap: () => {
                        console.log("Truck 1 was tapped onCalloutTap");
                    }
                },
                {
                    id: 5,
                    lat: 42.421834,
                    lng: 26.786096
                },
                {
                    id: 6,
                    lat: 42.021834,
                    lng: 25.086096
                },
                {
                    id: 7,
                    lat: 37.3754338,
                    lng: -5.9900776,
                    title: "Mr. Siesta",
                    subtitle: "Loves Angular, especially lazzzzzy loading",
                },
                {
                    id: 8,
                    lat: 12.518514,
                    lng: -70.2474425,
                    title: "Mr. Cool",
                    subtitle: "Thinks Vue is awesome",
                },
                {
                    id: 9,
                    lat: 61.6319675,
                    lng: 23.5501232,
                    title: "Mr. Nerdy",
                    subtitle: "A genuine JS and TS nerd",
                },
                {
                    id: 10,
                    lat: 48.2208286,
                    lng: 16.2399779,
                    title: "Mr. Sporty",
                    subtitle: "Runs through diagrams like a madman",
                }
            ]
        );

    }
}
