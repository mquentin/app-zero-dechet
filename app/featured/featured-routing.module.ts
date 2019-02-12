import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { FeaturedComponent } from "./featured.component";
import { AuthGuard } from "~/auth-guard.service";

const routes: Routes = [
    { path: "featured", component: FeaturedComponent, canActivate: [AuthGuard] },
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class FeaturedRoutingModule { }
