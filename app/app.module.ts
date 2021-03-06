import { NativeScriptModule } from "nativescript-angular/nativescript.module";
import { NgModule, NO_ERRORS_SCHEMA } from "@angular/core";
import { NativeScriptHttpClientModule } from "nativescript-angular/http-client";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { NativeScriptUISideDrawerModule } from "nativescript-ui-sidedrawer/angular";
import { NativeScriptUIListViewModule } from "nativescript-ui-listview/angular";

import { registerElement } from "nativescript-angular/element-registry";

registerElement("Mapbox", () => require("nativescript-mapbox").MapboxView);
registerElement("FAB", () => require("nativescript-floatingactionbutton").Fab);

import { authProviders, appRoutes } from "./app.routing";
import { AppComponent } from "./app.component";
import { setStatusBarColors } from "./shared";

import { LoginService } from "./shared/login.service";
import { BackendService } from "./shared/backend.service";
import { MarkerService } from "./shared/marker.service";

import { DechetsService } from "./shared/dechets.service";

import { LoginModule } from "./login/login.module";
import { HomeModule } from "./home/home.module";
import { BrowseModule } from "./browse/browse.module";
import { SearchModule } from "./search/search.module";
import { DechetModule } from "./dechet/dechet.module";
import { SolutionModule } from "./solution/solution.module";
import { SettingsModule } from "./settings/settings.module";

setStatusBarColors();

@NgModule({
    providers: [
        BackendService,
        LoginService,
        MarkerService,
        authProviders,
        DechetsService
    ],
    imports: [
        NativeScriptModule,
        NativeScriptHttpClientModule,
        NativeScriptRouterModule,
        NativeScriptRouterModule.forRoot(appRoutes),
        LoginModule,
        HomeModule,
        BrowseModule,
        SearchModule,
        DechetModule,
        SolutionModule,
        SettingsModule,
        NativeScriptUISideDrawerModule,
        NativeScriptUIListViewModule
    ],
    declarations: [
        AppComponent
    ],
    bootstrap: [AppComponent],
    schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule {
}
