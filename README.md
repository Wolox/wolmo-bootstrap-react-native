# Wolmo Bootstrap: React Native

![Versión npm](https://img.shields.io/npm/v/generator-wolmo-bootstrap-rn.svg?color=68d5f7)
![Download npm](https://img.shields.io/npm/dw/generator-wolmo-bootstrap-rn.svg?color=7551bb)
[![Supported by](https://img.shields.io/badge/supported%20by-Wolox.💗-blue.svg)](https://www.wolox.com.ar)

## Prerequisites

- CocoaPods: https://guides.cocoapods.org/using/getting-started.html#installation
- Node: https://github.com/creationix/nvm#install-script
- React Native Environment: https://facebook.github.io/react-native/docs/getting-started.html
- Ruby (for Fastlane): https://rvm.io/rvm/install
- Yarn: https://yarnpkg.com/lang/en/docs/install/#alternatives-tab

## TL;DR

You don't need to clone this repository. Just run the following in your terminal:

```bash
bash <(curl -s https://raw.githubusercontent.com/Wolox/wolmo-bootstrap-react-native/master/run.sh)
```

## Description

This codebase is meant to be used to kickoff react native projects with Wolox's [tech stack](#tech-stack), [tools](#tooling) and [basic boilerplate](#boilerplate).
The following optional features can be added out of the box to the new projects:

- Bitrise
- Drawer
- Firebase Analytics
- Firebase Crashlytics
- Firebase Performance
- Firebase Push Notifications
- Login and SignUp
- OnBoarding
- Redux Persist
- Tabs

### Boilerplate

The boilerplate includes

- [Analytics Tracking](/generators/app/templates/src/redux/middlewares/analyticsMiddleware.js)
- [Basic constants](/generators/app/templates/src/constants)
- [Basic utils](/generators/app/templates/src/utils)
- [Bitrise configuration](/generators/bitrise/tasks/createBitriseApp.js)
- [Deploy configuration with Fastlane Mobile (Android and iOS)](https://github.com/Wolox/fastlane-mobile)
- [Font customization](/generators/app/templates/src/config/fonts.js)
- [Http client configuration](/generators/app/templates/src/config/api.js)
- [i18next configuration](/generators/app/templates/src/config/i18n.js)
- [Push Notifications configuration](/generators/app/templates/src/config/pushNotifications.js)
- [React Navigation: Routes configuration](/generators/app/templates/src/app/components/AppNavigator/navigator.ejs)
- [Reactotron configuration](/generators/app/templates/src/config/reactotronConfig.ejs)
- [Redux store intialization](/generators/app/templates/src/redux/store.ejs)
- [Splash Screen](/generators/app/tasks/appSetup/coreFiles/splashScreenSetup.js)
- [TypeScript basic interfaces](/generators/app/templates/src/interfaces)
- [TypeScript configuration](/generators/app/templates/tsconfig.json)

### Tech Stack

- [Apisauce](https://github.com/skellock/apisauce)
- [Cerealizr](https://github.com/damfinkel/cerealizr)
- [React Hook Form](https://react-hook-form.com/)
- [i18next](https://www.i18next.com/)
- [React](https://reactjs.org/)
- [React Native](https://reactnative.dev/)
- [React Native Config](https://github.com/luggit/react-native-config)
- [React Native Firebase](https://invertase.io/oss/react-native-firebase)
- [React Native Push Notifications](https://github.com/zo0r/react-native-push-notification)
- [React Native Swiper](https://github.com/leecade/react-native-swiper)
- [React Navigation](https://reactnavigation.org/)
- [React Redux](https://react-redux.js.org/)
- [Redux](http://redux.js.org/)
- [Redux Persist](https://github.com/rt2zz/redux-persist)
- [Redux Recompose](https://github.com/Wolox/redux-recompose)
- [Redux Thunk](https://github.com/gaearon/redux-thunk)
- [Reselect](https://github.com/reactjs/reselect)
- [Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)

### Tooling

- [Babel](https://babeljs.io/)
- [Bitrise](https://devcenter.bitrise.io/)
- [Eslint](http://eslint.org/)
- [Fastlane Mobile](https://github.com/Wolox/fastlane-mobile)
- [Flipper](https://fbflipper.com/)
- [Jest](https://jestjs.io/)
- [Prettier](https://github.com/prettier/prettier)
- [React Native Testing Library](https://github.com/callstack/react-native-testing-library)
- [Reactotron](https://github.com/infinitered/reactotron)
- [TypeScript](https://www.typescriptlang.org/)

### Bootstrap Kick off

For bootstraping your own project using the template generator script you'll need to follow these steps:

1. Run `yarn install`.
2. run `yo yourPathToWolmo/generators/app/index.js` you'll need [Yeoman](https://yeoman.io/learning/index.html) installed for this. Also, the argument `-v` can be used for logging.
3. Some prompts will pop up on your terminal. Pick whatever configuration works best for your current proyect.
4. After the script is finished, your project folder will be successfully generated with all the necessary yarn dependencies installed. Do `cd you/project/path`.
5. Start budler using `yarn start`.
6. Run `npx react-native run-ios --scheme qa` or `yarn ios` for iOS and `npx react-native run-android --variant=qaDebug` or `yarn android` for Android.
7. Start working on your project!

### How do you have to configure Bitrise?

You will have to complete the [`bitriseInfo.json`](/generators/bitrise/bitriseInfo.json) with the next Info:

```
    "repositoryUrlSsh": "", // What's your repository url? (ssh only)
    "publicApp": false, // If true then the app visibility setting will be public, in case of false it will be private (boolean value)
    "repositorySlug": "", // Write the repo slug (The name of your repo not the url)
    "repoOwner": "", // Who is the owner of the repo?
    "gitProvider": "", // The git provider you are using, it can be 'github', 'bitbucket', 'gitlab', 'gitlab-self-hosted' or 'custom'
    "gitToken": "", // Please, write your git token (github, gitlab ot bitbucket) with permissions to create ssh keys here (write it with the format 'token <access_token>' if it is github, 'Bearer <access_token>' if it's gitlab or bitbucket)
    "bitriseToken": "", // Please, write your bitrise token with permissions to create ssh keys here
    "bitriseOrganizationSlug": "", // Please, write your Bitrise organization slug
    "projectPath": "", // projectPath in case that you want to add the bitrise.yml file to your local repository. This param is in case that you run the script without running the bootstrap
    "projectName": "" // Project name to complete the bitrise.yml file with correct info. This param is in case that you run the script without running the bootstrap
```

To run only the bitrise script you have to run: `yo yourPathToWolmo/generators/bitrise/bitrise.js` you'll need [Yeoman](https://yeoman.io/learning/index.html)

## Contributing

1. Fork it.
2. Create your feature branch (`git checkout -b my-new-feature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin my-new-feature`).
5. Create new Pull Request.

## About

This project was written by [Wolox](http://www.wolox.com.ar). It is mantained by:

<a href="https://github.com/sfernandez11"><img src="https://avatars3.githubusercontent.com/u/8583214?s=460&v=4" title="sfernandez11" width="80" height="80"></a>
<a href="https://github.com/guidoprinc"><img src="https://avatars3.githubusercontent.com/u/28304582?s=460&v=4" title="guidoprinc" width="80" height="80"></a>
<a href="https://github.com/mcavo"><img src="https://avatars3.githubusercontent.com/u/7648908?s=460&v=4" title="mcavo" width="80" height="80"></a>

![Wolox](https://raw.githubusercontent.com/Wolox/press-kit/master/logos/logo_banner.png).

## License

**wolmo-bootstrap-react-native** is available under the MIT [license](LICENSE).

    Copyright © 2020. WOLOX. All rights reserved. <hello@wolox.co>

    Permission is hereby granted, free of charge, to any person obtaining a copy
    of this software and associated documentation files (the "Software"), to deal
    in the Software without restriction, including without limitation the rights
    to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
    copies of the Software, and to permit persons to whom the Software is
    furnished to do so, subject to the following conditions:

    The above copyright notice and this permission notice shall be included in
    all copies or substantial portions of the Software.

    THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
    IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
    FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
    AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
    LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
    OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
    THE SOFTWARE.
