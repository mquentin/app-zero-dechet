# app-eco-lyon
app-eco-lyon

<h2 id="development">Development</h2>

This app is built with the NativeScript CLI. Once you have the [CLI installed](https://docs.nativescript.org/start/quick-setup), start by cloning the repo:

```
$ git clone https://github.com/mquentin/app-eco-lyon.git
$ cd app-eco-lyon
```

From there you can use the `run` command to run Groceries on iOS:

```
$ tns run ios
```

And the same command to run Groceries on Android:

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


<h3 id="linting">Linting</h3>

Groceries uses [tslint](https://www.npmjs.com/package/tslint) + [codelyzer](https://github.com/mgechev/codelyzer) rules to ensure the code follows the [angular style guide](https://angular.io/docs/ts/latest/guide/style-guide.html).

You can run the linter with the `tslint` npm script:
```
$ npm run tslint
```

<h3 id="unit-testing">Unit Testing</h3>

Groceries uses NativeScript’s [integrated unit test runner](http://docs.nativescript.org/core-concepts/testing) with [Jasmine](http://jasmine.github.io/). To run the tests for yourself use the `tns test` command:

```
$ tns test ios --emulator
```

```
$ tns test android --emulator
```

For more information on unit testing NativeScript apps, refer to the [NativeScript docs on the topic](http://docs.nativescript.org/core-concepts/testing).

<h3 id="travis">Travis CI</h3>

Groceries uses [Travis CI](https://travis-ci.org/) to verify all tests pass on each commit. Refer to the [`.travis.yml` configuration file](https://github.com/NativeScript/sample-Groceries/blob/release/.travis.yml) for details.