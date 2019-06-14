import { Injectable } from "@angular/core";
import { UserService } from "kinvey-nativescript-sdk/angular";


@Injectable()
export class BackendService {
  constructor(private userService: UserService) {}

  isLoggedIn() {
    return !!this.userService.getActiveUser();
  }

  static baseUrl = "https://baas.kinvey.com/";
  static appKey = "kid_Bytb5ETpE";
  static appUserHeader = "Basic a2lkX0J5dGI1RVRwRTpjMmRkODc4ZjA2YzQ0MDhkYTcxMzdhMzk1ODYwYmUzNg==";
}
