import { Injectable } from "@angular/core";
import { UserService } from "kinvey-nativescript-sdk/angular";


@Injectable()
export class BackendService {
  constructor(private userService: UserService) {}

  isLoggedIn() {
    return !!this.userService.getActiveUser();
  }
}
