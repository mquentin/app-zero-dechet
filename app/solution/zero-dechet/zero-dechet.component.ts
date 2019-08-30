import { Component, Input } from "@angular/core";

@Component({
    selector: "zd-zero-dechet",
    moduleId: module.id,
    providers: [],
    templateUrl: "./zero-dechet.component.html"
})
export class ZeroDechetComponent {

    @Input() zeroDechetSolutionList: any;

    constructor() {

    }
}
