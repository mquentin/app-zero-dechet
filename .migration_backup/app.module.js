"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var nativescript_module_1 = require("nativescript-angular/nativescript.module");
var core_1 = require("@angular/core");
var http_client_1 = require("nativescript-angular/http-client");
var router_1 = require("nativescript-angular/router");
var angular_1 = require("nativescript-ui-sidedrawer/angular");
var angular_2 = require("nativescript-ui-listview/angular");
var element_registry_1 = require("nativescript-angular/element-registry");
element_registry_1.registerElement("Mapbox", function () { return require("nativescript-mapbox").MapboxView; });
element_registry_1.registerElement("FAB", function () { return require("nativescript-floatingactionbutton").Fab; });
var app_routing_1 = require("./app.routing");
var app_component_1 = require("./app.component");
var shared_1 = require("./shared");
var login_service_1 = require("./shared/login.service");
var backend_service_1 = require("./shared/backend.service");
var marker_service_1 = require("./shared/marker.service");
var dechets_service_1 = require("./shared/dechets.service");
var login_module_1 = require("./login/login.module");
var home_module_1 = require("./home/home.module");
var browse_module_1 = require("./browse/browse.module");
var search_module_1 = require("./search/search.module");
var dechet_module_1 = require("./dechet/dechet.module");
var settings_module_1 = require("./settings/settings.module");
shared_1.setStatusBarColors();
var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            providers: [
                backend_service_1.BackendService,
                login_service_1.LoginService,
                marker_service_1.MarkerService,
                app_routing_1.authProviders,
                dechets_service_1.DechetsService
            ],
            imports: [
                nativescript_module_1.NativeScriptModule,
                http_client_1.NativeScriptHttpClientModule,
                router_1.NativeScriptRouterModule,
                router_1.NativeScriptRouterModule.forRoot(app_routing_1.appRoutes),
                login_module_1.LoginModule,
                home_module_1.HomeModule,
                browse_module_1.BrowseModule,
                search_module_1.SearchModule,
                dechet_module_1.DechetModule,
                settings_module_1.SettingsModule,
                angular_1.NativeScriptUISideDrawerModule,
                angular_2.NativeScriptUIListViewModule
            ],
            declarations: [
                app_component_1.AppComponent,
            ],
            bootstrap: [app_component_1.AppComponent],
            schemas: [core_1.NO_ERRORS_SCHEMA]
        })
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxnRkFBOEU7QUFDOUUsc0NBQTJEO0FBQzNELGdFQUFnRjtBQUNoRixzREFBdUU7QUFFdkUsOERBQW9GO0FBQ3BGLDREQUFnRjtBQUVoRiwwRUFBd0U7QUFFeEUsa0NBQWUsQ0FBQyxRQUFRLEVBQUUsY0FBTSxPQUFBLE9BQU8sQ0FBQyxxQkFBcUIsQ0FBQyxDQUFDLFVBQVUsRUFBekMsQ0FBeUMsQ0FBQyxDQUFDO0FBQzNFLGtDQUFlLENBQUMsS0FBSyxFQUFFLGNBQU0sT0FBQSxPQUFPLENBQUMsbUNBQW1DLENBQUMsQ0FBQyxHQUFHLEVBQWhELENBQWdELENBQUMsQ0FBQztBQUUvRSw2Q0FBeUQ7QUFDekQsaURBQStDO0FBQy9DLG1DQUE4QztBQUU5Qyx3REFBc0Q7QUFDdEQsNERBQTBEO0FBQzFELDBEQUF3RDtBQUV4RCw0REFBMEQ7QUFFMUQscURBQW1EO0FBQ25ELGtEQUFnRDtBQUNoRCx3REFBc0Q7QUFDdEQsd0RBQXNEO0FBQ3RELHdEQUFzRDtBQUN0RCw4REFBNEQ7QUFFNUQsMkJBQWtCLEVBQUUsQ0FBQztBQThCckI7SUFBQTtJQUNBLENBQUM7SUFEWSxTQUFTO1FBNUJyQixlQUFRLENBQUM7WUFDTixTQUFTLEVBQUU7Z0JBQ1AsZ0NBQWM7Z0JBQ2QsNEJBQVk7Z0JBQ1osOEJBQWE7Z0JBQ2IsMkJBQWE7Z0JBQ2IsZ0NBQWM7YUFDakI7WUFDRCxPQUFPLEVBQUU7Z0JBQ0wsd0NBQWtCO2dCQUNsQiwwQ0FBNEI7Z0JBQzVCLGlDQUF3QjtnQkFDeEIsaUNBQXdCLENBQUMsT0FBTyxDQUFDLHVCQUFTLENBQUM7Z0JBQzNDLDBCQUFXO2dCQUNYLHdCQUFVO2dCQUNWLDRCQUFZO2dCQUNaLDRCQUFZO2dCQUNaLDRCQUFZO2dCQUNaLGdDQUFjO2dCQUNkLHdDQUE4QjtnQkFDOUIsc0NBQTRCO2FBQy9CO1lBQ0QsWUFBWSxFQUFFO2dCQUNWLDRCQUFZO2FBQ2Y7WUFDRCxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO1lBQ3pCLE9BQU8sRUFBRSxDQUFDLHVCQUFnQixDQUFDO1NBQzlCLENBQUM7T0FDVyxTQUFTLENBQ3JCO0lBQUQsZ0JBQUM7Q0FBQSxBQURELElBQ0M7QUFEWSw4QkFBUyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5hdGl2ZVNjcmlwdE1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9uYXRpdmVzY3JpcHQubW9kdWxlXCI7XG5pbXBvcnQgeyBOZ01vZHVsZSwgTk9fRVJST1JTX1NDSEVNQSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2h0dHAtY2xpZW50XCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5cbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFVJU2lkZURyYXdlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdWktc2lkZWRyYXdlci9hbmd1bGFyXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCI7XG5cbmltcG9ydCB7IHJlZ2lzdGVyRWxlbWVudCB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9lbGVtZW50LXJlZ2lzdHJ5XCI7XG5cbnJlZ2lzdGVyRWxlbWVudChcIk1hcGJveFwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LW1hcGJveFwiKS5NYXBib3hWaWV3KTtcbnJlZ2lzdGVyRWxlbWVudChcIkZBQlwiLCAoKSA9PiByZXF1aXJlKFwibmF0aXZlc2NyaXB0LWZsb2F0aW5nYWN0aW9uYnV0dG9uXCIpLkZhYik7XG5cbmltcG9ydCB7IGF1dGhQcm92aWRlcnMsIGFwcFJvdXRlcyB9IGZyb20gXCIuL2FwcC5yb3V0aW5nXCI7XG5pbXBvcnQgeyBBcHBDb21wb25lbnQgfSBmcm9tIFwiLi9hcHAuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBzZXRTdGF0dXNCYXJDb2xvcnMgfSBmcm9tIFwiLi9zaGFyZWRcIjtcblxuaW1wb3J0IHsgTG9naW5TZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkL2xvZ2luLnNlcnZpY2VcIjtcbmltcG9ydCB7IEJhY2tlbmRTZXJ2aWNlIH0gZnJvbSBcIi4vc2hhcmVkL2JhY2tlbmQuc2VydmljZVwiO1xuaW1wb3J0IHsgTWFya2VyU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZC9tYXJrZXIuc2VydmljZVwiO1xuXG5pbXBvcnQgeyBEZWNoZXRzU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZC9kZWNoZXRzLnNlcnZpY2VcIjtcblxuaW1wb3J0IHsgTG9naW5Nb2R1bGUgfSBmcm9tIFwiLi9sb2dpbi9sb2dpbi5tb2R1bGVcIjtcbmltcG9ydCB7IEhvbWVNb2R1bGUgfSBmcm9tIFwiLi9ob21lL2hvbWUubW9kdWxlXCI7XG5pbXBvcnQgeyBCcm93c2VNb2R1bGUgfSBmcm9tIFwiLi9icm93c2UvYnJvd3NlLm1vZHVsZVwiO1xuaW1wb3J0IHsgU2VhcmNoTW9kdWxlIH0gZnJvbSBcIi4vc2VhcmNoL3NlYXJjaC5tb2R1bGVcIjtcbmltcG9ydCB7IERlY2hldE1vZHVsZSB9IGZyb20gXCIuL2RlY2hldC9kZWNoZXQubW9kdWxlXCI7XG5pbXBvcnQgeyBTZXR0aW5nc01vZHVsZSB9IGZyb20gXCIuL3NldHRpbmdzL3NldHRpbmdzLm1vZHVsZVwiO1xuXG5zZXRTdGF0dXNCYXJDb2xvcnMoKTtcblxuQE5nTW9kdWxlKHtcbiAgICBwcm92aWRlcnM6IFtcbiAgICAgICAgQmFja2VuZFNlcnZpY2UsXG4gICAgICAgIExvZ2luU2VydmljZSxcbiAgICAgICAgTWFya2VyU2VydmljZSxcbiAgICAgICAgYXV0aFByb3ZpZGVycyxcbiAgICAgICAgRGVjaGV0c1NlcnZpY2VcbiAgICBdLFxuICAgIGltcG9ydHM6IFtcbiAgICAgICAgTmF0aXZlU2NyaXB0TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRIdHRwQ2xpZW50TW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZS5mb3JSb290KGFwcFJvdXRlcyksXG4gICAgICAgIExvZ2luTW9kdWxlLFxuICAgICAgICBIb21lTW9kdWxlLFxuICAgICAgICBCcm93c2VNb2R1bGUsXG4gICAgICAgIFNlYXJjaE1vZHVsZSxcbiAgICAgICAgRGVjaGV0TW9kdWxlLFxuICAgICAgICBTZXR0aW5nc01vZHVsZSxcbiAgICAgICAgTmF0aXZlU2NyaXB0VUlTaWRlRHJhd2VyTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQXBwQ29tcG9uZW50LFxuICAgIF0sXG4gICAgYm9vdHN0cmFwOiBbQXBwQ29tcG9uZW50XSxcbiAgICBzY2hlbWFzOiBbTk9fRVJST1JTX1NDSEVNQV1cbn0pXG5leHBvcnQgY2xhc3MgQXBwTW9kdWxlIHtcbn1cbiJdfQ==