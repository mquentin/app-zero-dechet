import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { BrowseComponent } from "./browse.component";
import { AuthGuard } from "~/auth-guard.service";

const routes: Routes = [
    { path: "browse", component: BrowseComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class BrowseRoutingModule { }
