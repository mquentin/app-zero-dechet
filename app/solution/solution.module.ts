import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { ZeroDechetComponent } from "./zero-dechet/zero-dechet.component";
import { RecyclageComponent } from "./recyclage/recyclage.component";
import { RevalorisationUpcyclingTutoComponent } from "./revalorisation-upcycling-tuto/revalorisation-upcycling-tuto.component";

import { SolutionFilterPipe } from "./solution-filter.pipe";

@NgModule({
    imports: [
        NativeScriptCommonModule
    ],
    declarations: [
        ZeroDechetComponent,
        RecyclageComponent,
        RevalorisationUpcyclingTutoComponent,
        SolutionFilterPipe
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ],
    exports: [
        ZeroDechetComponent,
        RecyclageComponent,
        RevalorisationUpcyclingTutoComponent,
        SolutionFilterPipe
    ]
})
export class SolutionModule {
}
