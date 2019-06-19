import { platformNativeScriptDynamic } from "nativescript-angular/platform";
import { AppModule } from "./app.module";

import "./shared/kinvey.common";

platformNativeScriptDynamic().bootstrapModule(AppModule);
