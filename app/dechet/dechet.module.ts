import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { DechetRoutingModule } from "./dechet-routing.module";
import { DechetComponent } from "./dechet.component";
import { DechetContentComponent } from "./dechet-content/dechet-content.component";
import { SolutionModule } from "~/solution/solution.module";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        DechetRoutingModule,
        SolutionModule
    ],
    declarations: [
        DechetComponent,
        DechetContentComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DechetModule {
}
