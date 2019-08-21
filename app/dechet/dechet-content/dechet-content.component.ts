import { Component, Input } from "@angular/core";

@Component({
    selector: "zd-dechet-content",
    moduleId: module.id,
    providers: [],
    templateUrl: "./dechet-content.component.html"
})
export class DechetContentComponent {

    @Input() dechetContent: any;

    constructor() {
        console.log("Build content constructor", this.dechetContent);
    }
}
