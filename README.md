<h1 id="zeroDechet">zeroDechet</h1>

<h2 id="development">Development</h2>

This app is built with the NativeScript CLI. Once you have the [CLI installed](https://docs.nativescript.org/start/quick-setup), start by cloning the repo:

```
$ git clone https://github.com/mquentin/app-zero-dechet.git
$ cd app-zero-dechet
```

From there you can use the `run` command to run zeroDechet on iOS:

```
$ tns run ios
```

And the same command to run zeroDechet on Android:

```
$ tns run android
```

<h3 id="device">Run on android device</h3>

- link the device through USB

- list the list of available device (including the connected one):
	tns device android

- install the IOS / android platforms
    tns install

- Build the first time
    tns build Android --bundle

- run nativescript:
	tns run android

- run and debug:
    tns debug android
    
<h2 id="update">Update the app - nativescript, npm packages, platform...</h2>

Also remove the existing platform before: tns platform remove android
    
[Update instructions](https://docs.nativescript.org/releases/upgrade-instructions)
    
<h3 id="linting">Run on android for production</h3>


    1) Install webpack.   
    npm install --save-dev nativescript-dev-webpack
    
    2) Install webpack’s dependencies.   
    npm install
    
    3) Run on iOS with webpack, UglifyJS, and Angular Ahead-of-Time enabled.   
    tns run ios --bundle --env.uglify --env.aot 
    
    4) Run on Android with webpack, UglifyJS, Angular Ahead-of-Time (if using Angular), and V8 heap snapshot builds enabled.   
    tns run android --bundle --env.uglify --env.aot --env.snapshot


<h3 id="linting">Linting</h3>

zeroDechet uses [tslint](https://www.npmjs.com/package/tslint) + [codelyzer](https://github.com/mgechev/codelyzer) rules to ensure the code follows the [angular style guide](https://angular.io/docs/ts/latest/guide/style-guide.html).

You can run the linter with the `tslint` npm script:
```
$ npm run tslint
```

<h3 id="unit-testing">Unit Testing</h3>

zeroDechet uses NativeScript’s [integrated unit test runner](http://docs.nativescript.org/core-concepts/testing) with [Jasmine](http://jasmine.github.io/). To run the tests for yourself use the `tns test` command:

```
$ tns test ios --emulator
```

```
$ tns test android --emulator
```
