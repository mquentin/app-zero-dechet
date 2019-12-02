import { Injectable } from "@angular/core";
import * as Kinvey from "kinvey-nativescript-sdk";
import { User } from "./user.model";

@Injectable()
export class LoginService {
    constructor() {}

    register(user: User) {
        return Kinvey.User.signup({ username: user.email, password: user.password });
    }

    login(user: User) {
        return Kinvey.User.login(user.email, user.password);
    }

    logoff() {
        return Kinvey.User.logout();
    }

    resetPassword(email) {
        return Kinvey.User.resetPassword(email);
    }
}
