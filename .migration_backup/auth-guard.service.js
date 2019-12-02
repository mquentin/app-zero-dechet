"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("@angular/router");
var backend_service_1 = require("./shared/backend.service");
var AuthGuard = /** @class */ (function () {
    function AuthGuard(router, backendService) {
        this.router = router;
        this.backendService = backendService;
    }
    AuthGuard.prototype.canActivate = function () {
        if (this.backendService.isLoggedIn()) {
            return true;
        }
        else {
            this.router.navigate(["/login"]);
            return false;
        }
    };
    AuthGuard = __decorate([
        core_1.Injectable(),
        __metadata("design:paramtypes", [router_1.Router, backend_service_1.BackendService])
    ], AuthGuard);
    return AuthGuard;
}());
exports.AuthGuard = AuthGuard;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXV0aC1ndWFyZC5zZXJ2aWNlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiYXV0aC1ndWFyZC5zZXJ2aWNlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQTJDO0FBQzNDLDBDQUFzRDtBQUV0RCw0REFBMEQ7QUFHMUQ7SUFDRSxtQkFBb0IsTUFBYyxFQUFVLGNBQThCO1FBQXRELFdBQU0sR0FBTixNQUFNLENBQVE7UUFBVSxtQkFBYyxHQUFkLGNBQWMsQ0FBZ0I7SUFBSSxDQUFDO0lBRS9FLCtCQUFXLEdBQVg7UUFDRSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsVUFBVSxFQUFFLEVBQUU7WUFDcEMsT0FBTyxJQUFJLENBQUM7U0FDYjthQUNJO1lBQ0gsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLENBQUMsQ0FBQyxDQUFDO1lBQ2pDLE9BQU8sS0FBSyxDQUFDO1NBQ2Q7SUFDSCxDQUFDO0lBWFUsU0FBUztRQURyQixpQkFBVSxFQUFFO3lDQUVpQixlQUFNLEVBQTBCLGdDQUFjO09BRC9ELFNBQVMsQ0FZckI7SUFBRCxnQkFBQztDQUFBLEFBWkQsSUFZQztBQVpZLDhCQUFTIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgSW5qZWN0YWJsZSB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIENhbkFjdGl2YXRlIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5pbXBvcnQgeyBCYWNrZW5kU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZC9iYWNrZW5kLnNlcnZpY2VcIjtcblxuQEluamVjdGFibGUoKVxuZXhwb3J0IGNsYXNzIEF1dGhHdWFyZCBpbXBsZW1lbnRzIENhbkFjdGl2YXRlIHtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSByb3V0ZXI6IFJvdXRlciwgcHJpdmF0ZSBiYWNrZW5kU2VydmljZTogQmFja2VuZFNlcnZpY2UpIHsgfVxuXG4gIGNhbkFjdGl2YXRlKCkge1xuICAgIGlmICh0aGlzLmJhY2tlbmRTZXJ2aWNlLmlzTG9nZ2VkSW4oKSkge1xuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfVxuICAgIGVsc2Uge1xuICAgICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2xvZ2luXCJdKTtcbiAgICAgIHJldHVybiBmYWxzZTtcbiAgICB9XG4gIH1cbn1cblxuIl19