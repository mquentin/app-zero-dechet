import { Component, Input } from "@angular/core";

@Component({
    selector: "zd-recyclage",
    moduleId: module.id,
    providers: [],
    templateUrl: "./recyclage.component.html"
})
export class RecyclageComponent {

    @Input() recyclageSolutionList: any;

    constructor() {

    }
}
