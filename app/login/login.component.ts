import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import { Color } from "color";
import { connectionType, getConnectionType } from "connectivity";
import { Animation } from "ui/animation";
import { View } from "ui/core/view";
import { prompt } from "ui/dialogs";
import { Page } from "ui/page";
import { RouterExtensions } from "nativescript-angular/router";

import { alert } from "../shared";

import { User } from "../shared/user.model";
import { LoginService } from "../shared/login.service";

@Component({
    selector: "gr-login",
    moduleId: module.id,
    templateUrl: "./login.component.html",
    styleUrls: ["./login-common.css", "./login.component.css"],
})
export class LoginComponent implements OnInit {
    user: User;
    isLoggingIn = true;
    isAuthenticating = false;

    @ViewChild("initialContainer", { static: false }) initialContainer: ElementRef;
    @ViewChild("mainContainer", { static: false }) mainContainer: ElementRef;
    @ViewChild("logoContainer", { static: false }) logoContainer: ElementRef;
    @ViewChild("formControls", { static: false }) formControls: ElementRef;
    @ViewChild("signUpStack", { static: false }) signUpStack: ElementRef;
    @ViewChild("password", { static: false }) password: ElementRef;

    constructor(private router: Router,
                private loginService: LoginService,
                private routerExtensions: RouterExtensions,
                private page: Page) {
        this.user = new User();
        // this.page.className = "login-page";
    }

    ngOnInit() {
        this.page.actionBarHidden = true;
    }

    focusPassword() {
        this.password.nativeElement.focus();
    }

    startBackgroundAnimation(background) {
        background.animate({
            scale: {x: 1.0, y: 1.0},
            duration: 10000
        });
    }

    submit() {
        if (!this.user.isValidEmail()) {
            alert("Enter a valid email address.");
            return;
        }

        this.isAuthenticating = true;
        if (this.isLoggingIn) {
            this.login();
        } else {
            this.signUp();
        }
    }

    login() {
        if (getConnectionType() === connectionType.none) {
            alert("ecoLyon requires an internet connection to log in.");
            return;
        }

        this.loginService.login(this.user)
            .then(() => {
                this.isAuthenticating = false;
                this.router.navigate(["/home"]);
            })
            .catch((error) => {
                alert("Unfortunately we could not find your account.");
                this.isAuthenticating = false;
            });
    }

    signUp() {
        if (getConnectionType() === connectionType.none) {
            alert("ecoLyon requires an internet connection to register.");
            return;
        }

        this.loginService.register(this.user)
            .then(() => {
                alert("Your account was successfully created.");
                this.isAuthenticating = false;
                this.toggleDisplay();
            })
            .catch((error) => {
                const msg = typeof error === "string" ? error : error.message;
                if (msg.match(/same user/)) {
                    alert("This email address is already in use.");
                } else {
                    alert("Unfortunately we were unable to create your account.");
                }
                this.isAuthenticating = false;
            });
    }

    forgotPassword() {
        prompt({
            title: "Forgot Password",
            message: "Enter the email address you used to register for ecoLyon to reset your password.",
            defaultText: "",
            okButtonText: "Ok",
            cancelButtonText: "Cancel"
        }).then((data) => {
            if (data.result) {
                this.loginService.resetPassword(data.text.trim())
                    .subscribe(() => {
                        alert("Your password was successfully reset. Please check your email for instructions on choosing a new password.");
                    }, () => {
                        alert("Unfortunately, an error occurred resetting your password.");
                    });
            }
        });
    }

    toggleDisplay() {
        this.isLoggingIn = !this.isLoggingIn;
        let mainContainer = <View>this.mainContainer.nativeElement;
        mainContainer.animate({
            backgroundColor: this.isLoggingIn ? new Color("white") : new Color("#301217"),
            duration: 200
        });
    }

    showMainContent() {
        let initialContainer = <View>this.initialContainer.nativeElement;
        let mainContainer = <View>this.mainContainer.nativeElement;
        let logoContainer = <View>this.logoContainer.nativeElement;
        let formControls = <View>this.formControls.nativeElement;
        let signUpStack = <View>this.signUpStack.nativeElement;
        let animations = [];

        // Fade out the initial content over one half second
        initialContainer.animate({
            opacity: 0,
            duration: 500
        }).then(function () {
            // After the animation completes, hide the initial container and
            // show the main container and logo. The main container and logo will
            // not immediately appear because their opacity is set to 0 in CSS.
            initialContainer.style.visibility = "collapse";
            mainContainer.style.visibility = "visible";
            logoContainer.style.visibility = "visible";

            // Fade in the main container and logo over one half second.
            animations.push({target: mainContainer, opacity: 1, duration: 500});
            animations.push({target: logoContainer, opacity: 1, duration: 500});

            // Slide up the form controls and sign up container.
            animations.push({target: signUpStack, translate: {x: 0, y: 0}, opacity: 1, delay: 500, duration: 150});
            animations.push({target: formControls, translate: {x: 0, y: 0}, opacity: 1, delay: 650, duration: 150});

            // Kick off the animation queue
            new Animation(animations, false).play();
        });
    }
}
