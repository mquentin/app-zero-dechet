import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptCommonModule } from "nativescript-angular/common";

import { DechetRoutingModule } from "./dechet-routing.module";
import { DechetComponent } from "./dechet.component";

@NgModule({
    imports: [
        NativeScriptCommonModule,
        DechetRoutingModule
    ],
    declarations: [
        DechetComponent
    ],
    schemas: [
        NO_ERRORS_SCHEMA
    ]
})
export class DechetModule { }
