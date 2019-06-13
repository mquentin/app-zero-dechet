import { Injectable } from "@angular/core";
import { UserService, BaseError } from "kinvey-nativescript-sdk/angular";
import { User } from "./user.model";

@Injectable()
export class LoginService {
    constructor(private userService: UserService) {}

    register(user: User) {
        return this.userService.signup({ username: user.email, password: user.password })
            .catch(this.handleErrors);
    }

    login(user: User) {
        return this.userService.login(user.email, user.password)
            .catch(this.handleErrors);
    }

    logoff() {
        return this.userService.logout()
            .catch(this.handleErrors);
    }

    resetPassword(email) {
        return this.userService.resetPassword(email)
            .catch(this.handleErrors);
    }

    handleErrors(error: BaseError) {
        console.error(error.message);
        return Promise.reject(error.message);
    }
}
