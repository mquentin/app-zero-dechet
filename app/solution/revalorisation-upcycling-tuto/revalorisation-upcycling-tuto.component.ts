import { Component, Input } from "@angular/core";

@Component({
    selector: "zd-revalorisation-upcycling-tuto",
    moduleId: module.id,
    providers: [],
    templateUrl: "./revalorisation-upcycling-tuto.component.html"
})
export class RevalorisationUpcyclingTutoComponent {

    @Input() revalorisationUpcyclingTutoSolutionList: any;

    constructor() {

    }
}
