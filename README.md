# Wolmo Bootstrap: React Native

## Prerequisites

* React native dev environment: https://facebook.github.io/react-native/docs/getting-started.html
* node & npm: https://github.com/creationix/nvm#install-script
* yarn: https://yarnpkg.com/lang/en/docs/install/#alternatives-tab
* ruby (for Fastlane): https://rvm.io/rvm/install
* CocoaPods: https://guides.cocoapods.org/using/getting-started.html#installation

## TL;DR

You don't need to clone this repository. Just run the following in your terminal:

```bash
bash <(curl -s https://raw.githubusercontent.com/Wolox/wolmo-bootstrap-react-native/master/run.sh)
```

## Description

This codebase is meant to be used to kickoff react native projects with Wolox's [tech stack](#tech-stack), [tools](#tooling) and [basic boilerplate](#boilerplate).
The following optional features can be added out of the box to the new projects:

* Tabs
* Login
* Drawer
* Redux Persist
* Firebase Analytics
* Firebase Crashlytics
* Firebase Push Notifications
* Bitrise

### Boilerplate

The boilerplate includes

* [Basic routes configuration for React Navigation](/generators/app/templates/src/app/screens.ejs)
* [Redux store intialization](/generators/app/templates/src/redux/store.ejs)
* [Reactotron config](/generators/app/templates/src/config/reactotronConfig.ejs)
* [Basic constants](/generators/app/templates/src/constants)
* [Http client config](/generators/app/templates/src/config/api.js)
* [i18next config](/generators/app/templates/src/config/i18n.js)
* [Analytics Tracking](/generators/app/templates/src/redux/middlewares/analyticsMiddleware.js)
* [Splash Screen](/generators/app/tasks/appSetup/splashScreenSetup.js)
* [Font Customization](/generators/app/templates/src/config/fonts.js)
* [Bitrise config](/generators/app/tasks/createBitriseApp.js)

### Tech Stack

* [React](https://facebook.github.io/react/)
* [React Native](https://facebook.github.io/react-native/)
* [React Navigation](https://reactnavigation.org/)
* [Redux](http://redux.js.org/)
* [Redux Thunk](https://github.com/gaearon/redux-thunk)
* [Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)
* [Apisauce](https://github.com/skellock/apisauce)
* [Reselect](https://github.com/reactjs/reselect)
* [React Native Config](https://github.com/luggit/react-native-config)
* [i18next](https://www.i18next.com/)
* [Bitrise](https://devcenter.bitrise.io/)

### Tooling

* [Eslint](http://eslint.org/)
* [Prettier](https://github.com/prettier/prettier)
* [Reactotron](https://github.com/infinitered/reactotron)

### Bootstrap Kick off

For bootstraping your own project using the template generator script you'll need to follow these steps:

1. Run `npm install` or `yarn install`.
2. run `yo yourPathToWolmo/generators/app/index.js` you'll need [Yeoman](https://yeoman.io/learning/index.html) installed for this. Also, the argument `-v` can be used for logging.
3. Some prompts will pop up on your terminal. Pick whatever configuration works best for your current proyect.
4. After the script is finished, your project folder will be successfully generated with all the necessary npm dependencies installed. Do `cd you/project/path`.
5. Start budler using `npm run start` or `npm start`.
6. Run `react-native run-ios` or/and `react-native run-android`.
7. Start working on your project!

## Contributing

1. Fork it.
2. Create your feature branch (`git checkout -b my-new-feature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin my-new-feature`).
5. Create new Pull Request.

## About

This project was written by [Wolox](http://www.wolox.com.ar). It is mantained by:

<a href="https://github.com/sfernandez11"><img src="https://avatars2.githubusercontent.com/u/8583214?s=460&v=4" title="sfernandez11" width="80" height="80"></a>
<a href="https://github.com/mattgle"><img src="https://avatars1.githubusercontent.com/u/44204622?s=460&v=4" title="mattgle" width="80" height="80"></a>
<a href="https://github.com/andyOlarte514"><img src="https://avatars3.githubusercontent.com/u/40371687?s=460&v=4" title="andyOlarte514" width="80" height="80"></a>
<a href="https://github.com/Wfolini"><img src="https://avatars0.githubusercontent.com/u/12822259?s=460&v=4" title="Wfolini" width="80" height="80"></a>
<a href="https://github.com/guidoprinc"><img src="https://avatars3.githubusercontent.com/u/28304582?s=460&v=4" title="guidoprinc" width="80" height="80"></a>
<a href="https://github.com/mcavo"><img src="https://avatars3.githubusercontent.com/u/7648908?s=460&v=4" title="mcavo" width="80" height="80"></a>
<a href="https://github.com/guilleSequeiraWolox"><img src="https://avatars2.githubusercontent.com/u/42941989?s=460&v=4" title="guilleSequeiraWolox" width="80" height="80"></a>
<a href="https://github.com/rodrigoWolox"><img src="https://avatars0.githubusercontent.com/u/43755587?s=460&v=4" title="rodrigoWolox" width="80" height="80"></a>
<a href="https://github.com/felire"><img src="https://avatars3.githubusercontent.com/u/11776795?s=460&v=4" title="felire" width="80" height="80"></a>
<a href="https://github.com/Anisospina"><img src="https://avatars3.githubusercontent.com/u/13072856?s=460&v=4" title="Anisospina" width="80" height="80"></a>

![Wolox](https://raw.githubusercontent.com/Wolox/press-kit/master/logos/logo_banner.png).

## License

**wolmo-bootstrap-react-native** is available under the MIT [license](LICENSE).

    Copyright © 2018. WOLOX. All rights reserved. <hello@wolox.co>

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
