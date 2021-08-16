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

## KickOff

Follow our Kickoff guide [here](./KICKOFF.md)

## Description

This codebase is meant to be used to kickoff react native projects with Wolox's [tech stack](#tech-stack), [tools](#tooling) and [basic boilerplate](#boilerplate).
The following optional features can be added out of the box to the new projects:

- Bitrise
- Drawer
- Firebase Analytics
- Firebase Crashlytics
- Firebase Performance
- Login and SignUp
- OnBoarding
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
- [React Navigation: Routes configuration](/generators/app/templates/src/app/components/AppNavigator/navigator.ejs)
- [Reactotron configuration](/generators/app/templates/src/config/reactotronConfig.ejs)
- [Redux store intialization](/generators/app/templates/src/redux/store.ejs)
- [Splash Screen](/generators/app/tasks/appSetup/coreFiles/splashScreenSetup.js)
- [TypeScript basic interfaces](/generators/app/templates/src/interfaces)
- [TypeScript configuration](/generators/app/templates/tsconfig.json)

### Tech Stack

- [Apisauce](https://github.com/skellock/apisauce)
- [Cerealizr](https://github.com/damfinkel/cerealizr)
- [i18next](https://www.i18next.com/)
- [React](https://reactjs.org/)
- [React Hook Form](https://react-hook-form.com/)
- [React Native](https://reactnative.dev/)
- [React Native Config](https://github.com/luggit/react-native-config)
- [React Native Firebase](https://invertase.io/oss/react-native-firebase)
- [React Native Swiper](https://github.com/leecade/react-native-swiper)
- [React Navigation](https://reactnavigation.org/)
- [React Redux](https://react-redux.js.org/)
- [Redux](http://redux.js.org/)
- [Redux Persist](https://github.com/rt2zz/redux-persist)
- [Redux Recompose](https://github.com/Wolox/redux-recompose)
- [Redux Thunk](https://github.com/gaearon/redux-thunk)
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

## Contributing

1. Fork it.
2. Create your feature branch (`git checkout -b my-new-feature`).
3. Commit your changes (`git commit -am 'Add some feature'`).
4. Push to the branch (`git push origin my-new-feature`).
5. Create new Pull Request.

## About

This project is maintained and it was written by [Wolox](https://www.wolox.com.ar).

![Wolox](https://raw.githubusercontent.com/Wolox/press-kit/master/logos/logo_banner.png)

## License

**wolmo-bootstrap-react-native** is available under the **MIT** [license](LICENSE).
