import { Component, OnInit, OnDestroy } from "@angular/core";
import { RadSideDrawer } from "nativescript-ui-sidedrawer";
import * as app from "tns-core-modules/application";

import { MapboxViewApi, Viewport as MapboxViewport } from "nativescript-mapbox";
import { MarkerService, GeoJson } from "../shared";

@Component({
    selector: "zd-search",
    moduleId: module.id,
    styleUrls: ["./search-common.css"],
    templateUrl: "./search.component.html"
})
export class SearchComponent implements OnInit, OnDestroy {

    private map: MapboxViewApi;
    private markers: any;

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

    addMarker(): void {
        this.map.getViewport().then((viewport: MapboxViewport) => {
            const lat = (viewport.bounds.north + viewport.bounds.south) / 2;
            const lng = (viewport.bounds.east + viewport.bounds.west) / 2;
            const markerId = new Date().getTime();
            const title = "FAB marker";
            const subtitle = "Tap to remove";

            this.map.addMarkers([{
                id: new Date().getTime(),
                lat: lat,
                lng: lng,
                title: title,
                subtitle: subtitle,
                onCalloutTap: () => {
                    this.map.removeMarkers([markerId]);
                }
            }]);

            const newMarker = new GeoJson(lat, lng, title, subtitle, { message: "TMP MESSAGE" });
            this.markerService.createMarker(newMarker);
        });
    }
}
