# Changelog

All notable changes to this project will be documented in this file.

## [0.7.2] - 2020-04-03

- Removed extra lane from Fastlane (added in `fastlane-mobile` repo)
- Fixed Firebase Analytics issue
- Upgraded dependencies and `yarn.lock` to solve `Security Alerts` github issues
- Updated README
- Fixed `google-service.json` and `GoogleService-Info.plist`

## [0.7.1] - 2020-03-27

- Updated some files and libs to support React Native 0.62
- Removed some old and unused implementations
- Added `multiDex` support for Android
- Setted `react-native-gesture-handler` version to `v1.5.3` to solve a problem with the navigation in Android. The issue appears in versions > `1.5.3`
- Updated some Reactotron implementation

## [0.7.0] - 2020-03-20

- Updated some bootstrap configurations, README and fixed linter problems (added Wolox CI)
- Upgraded Firebase package configuration to v6 (Analytics and Push Notifications). Added Firebase Performance Monitoring as a new feature
- Upgraded some libs to solve vulnerabilities
- Added the automatization on fetching the `Fastlane` files from `fastlane-mobile` repo and deleted static files

## [0.6.2] - 2020-02-05

- Added `@react-native-community/masked-view` and `react-native-safe-area-context` to solve the dependencies issue
- Change `publicApp` default to `false` in `bitriseInfo.json`

## [0.6.1] - 2019-11-27

- Setted `react-native-config` version to `v0.11.7` to solve a problem with the build of `ios` in `v0.12`
- Updated `README` with some information badges
- Updated `package.json` with some project information to show on `npm`

## [0.6.0] - 2019-11-13

- Added default `Splash Screen`
- Added `Status Bar` customization
- Updated implementation to RN 0.61 version
- Enabled `Hermes` engine
- Added Snapshot testing for Login
- Added `RN Localize` and used within `i18next` for better translations
- Updated both project and bootstrap README
- Improved both project and bootstrap Eslint configuration
- Improved Redux testing
- Improved custom fonts implementation and added Montserrat as default font
- Added `Firebase Crashlytics` as a new feature
- Added `Bitrise CI/CD` as a new feature
- Added CHANGELOG for bootstrap

## [0.5.0] - 2019-09-23

- Used React Hooks for most of the app components and screens
- Minor fixes
- Added `Redux Persist` as a new feature
- Updated React Navigation to v4 implementation
- Removed unused dependencies
- Added `pull_request_template` for new bootstrap PRs
- Added extra configuration for `RN Screens` and `RN Gesture Handler`
- Added Firebase Core

## [0.4.0] - 2019-08-29

- Migrated from `Circle CI` to `Jenkins`
- Updated `Fastlane` configuration
- Replaced `i18n` implementation with `i18next`
- Updated `async-storage` with `@react-native-community/async-storage`
- Updated and improved `Reactotron` implementation
- Updated `pull_request_template`
- Minor fixes
- Improved screens definition
- Improved README file
- Updated Drawer implementation with `react-navigation-drawer`
- Added babel Aliases for better coding
- Added custom fonts configuration
- Updated Eslint configuration
- Used React Hooks for `AppNavigator`
- Added mocks and testing for Login and Redux actions/reducer
- Updated implementation to RN 0.60 version

## [0.3.7] - 2019-04-17

- Fixed bundler identifier task
- Updated React lifecycle method
- Fixed `package.json` script (lint-diff)
- Added `configureMergeState` to Redux store
- Fixed Google Analytics implementation
- Updated React Navigation to v3 implementation
- Fixed Eslint problems
- Added `InitialLoading` screen

## [0.3.6] - 2018-12-26

- Minor fixes

## [0.3.5] - 2018-08-21

- Minor fixes

## [0.3.4] - 2018-06-13

- Added `redux-recompose`
- Updated React Navigation to v2 implementation

## [0.3.3] - 2018-04-19

## [0.3.2] - 2018-04-18

## [0.3.1] - 2018-02-27

## [0.3.0] - 2018-02-26

## [0.2.0] - 2017-09-20

## [0.1.0] - 2017-09-11

## [0.0.4] - 2017-07-28

## [0.0.3] - 2017-05-11

## [0.0.1] - 2017-04-17
