import { Injectable } from "@angular/core";
import { UserService } from "kinvey-nativescript-sdk/angular";
import { HttpHeaders } from "@angular/common/http";

@Injectable()
export class BackendService {
    constructor(private userService: UserService) {
    }

    isLoggedIn() {
        return !!this.userService.getActiveUser();
    }

    static baseUrl = "https://baas.kinvey.com/";
    static appKey = "kid_Bytb5ETpE";
    static appUserHeader = "Basic a2lkX0J5dGI1RVRwRTpjMmRkODc4ZjA2YzQ0MDhkYTcxMzdhMzk1ODYwYmUzNg==";

    static apiUrl = BackendService.baseUrl + "appdata/" + BackendService.appKey;

    static getCommonHeaders(): HttpHeaders {
        return new HttpHeaders({
            "Content-Type": "application/json",
            "Authorization": BackendService.appUserHeader
        });
    }
}
