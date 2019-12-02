import { Injectable } from "@angular/core";
import { HttpHeaders } from "@angular/common/http";
import * as Kinvey from "kinvey-nativescript-sdk";

@Injectable()
export class BackendService {
    constructor() {
    }

    isLoggedIn() {
        return !!Kinvey.User.getActiveUser();
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
