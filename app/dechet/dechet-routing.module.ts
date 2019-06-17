import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { DechetComponent } from "./dechet.component";
import { AuthGuard } from "~/auth-guard.service";

const routes: Routes = [
    { path: "dechet/:id", component: DechetComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class DechetRoutingModule { }
