# Changelog

All notable changes to this project will be documented in this file.

## [1.9.0] - 2021-10-17
- Updated Bootstrap dependency (`yaoman-generator`) and docs (`README`, `KICKOFF`, `CHANGELOG` and `LICENSE`)
- Updated generated project dependencies (`Firebase`, `Babel` and `RN Testing Library`)
- `Typescript`: Fixed some errors and improved some types in Navigation params
- Added new Navigation function for reset stacks
- Removed `Bitrise` as bootstrap feature, keep only as generator

## [1.8.0] - 2021-05-13
- Fixed `CustomTextInput` focus handler
- Fixed `CustomTextInputController` TS interface
- Migrated `react-hook-form` configuration from v6 to v7
- Updated `firebaseFilesScript.sh` file
- Updated Firebase Crashlytics configuration
- Disabled Native DarkMode

## [1.7.0] - 2021-03-19
- Update to `redux-recompose` v3
- Updated some files and libs to support React Native 0.64
- Fixed iOS base schema
- Updated some files to support React Native Reanimated v2 (`babel.config.js` and `MainApplication`)
- Fixed React Hook Form validations
- Deleted `android.enableR8=false` (deprecated)
- Updated Firebase dependencies
- Updated `installPods` task with `npx pod-install` command
- Refactored some files

## [1.6.0] - 2020-12-22
- Fixed errors in the `Login` screen
- Fixed TypeScript error in `Reactotron` config and in other TypeScript interfaces
- Improved the `AppNavigator` component
- Removed `Firebase Push Notifications` as a Bootstrap feature
- Added `Redux-Persist` as an App core feature
- Added `Nunito` as default font
- Added `Jest` coverage for tests and coverage threshold
- Increased the `JVM` memory for Android release build
- Updated `react-native-config` configuration for env files in iOS project
- Updated the `Auth` tests
- Removed the `OnBoardingService` file (replaced with `redux-persist`)
- Updated `auth` actions with `redux-persist` configuration
- Replaced `Formik` with `react-hook-form`
- Deleted `withFormikField` HOC

## [1.5.0] - 2020-10-27
- Replaced `@react-native-community/async-storage` with `@react-native-async-storage/async-storage`
- Firebase Analytics: Replaced `setCurrentScreen` with `logScreenView`
- Used the latest version of `react-native-flipper`
- Updated `Reactotron` configuration for AsyncStorage handler

## [1.4.0] - 2020-09-30

- Removed global dependency of `react-native-cli` and `reactNativeCliInstall` step.
- Replaced `react-native` command with `npx react-native ...` (RN community indication)
- Updated again some Firebase configuration (App, Crashlytics and Performance)
- Fixed `lint-diff` script in Generator and Bootstraped Project
- Updated `androidx.appcompat` dependency in Android project configuration

## [1.3.0] - 2020-09-02

- Replaced Enzyme with [RNTL](https://github.com/callstack/react-native-testing-library)
- Fixed Auth tests
- Updated some Firebase configuration (App, Crashlytics and Performance) in Android and iOS projects
- Disabled R8 for Android releases (multidex overhead memory issue)
- Updated [README](/generators/app/templates/README.ejs) with Firebase configuration and deployment sections

## [1.2.0] - 2020-07-07

- Added [Formik](https://jaredpalmer.com/formik/) + [withFormikField (HOC)](/generators/app/templates/src/app/components/withFormikField/index.tsx) to create Custom Fields
- Added some field validations
- Updated `Login` screen and refactored authentication flow
- Added [Flipper](https://fbflipper.com/) to [Reactotron Configuration](/generators/app/templates/src/config/reactotronConfig.ejs)
- Added `SignUp` screen. Now the feature is `Login and SignUp` (`Auth` screen)
- Restructured Bootstrap's folders. Split into two different generators (App and Bitrise)
- Fixed disable landscape orientation feature logic
- Added `useAsyncRequest` hook (also hook alias and folder) for requests without redux
- Added proguard-rules on Android Release build configuration
- Solved Cyclic dependency between AuthActions and AuthService

## [1.1.0] - 2020-05-29

- Migrated [React Navigation](https://reactnavigation.org/) configuration to v5

## [1.0.1] - 2020-05-04

- Re-uploaded bootstrap version due to internet connection error

## [1.0.0] - 2020-05-04

- Migrated bootstrap generated project configuration and files to `TypeScript (TS and TSX)`
- Added `AnimatedCustomTextInput` as a new bootstrap project Component
- Added `jest.config.js` file to handle all the `Jest` configuration
- Added `OnBoarding` as a new bootstrap project feature
- Deleted `npm` as package manager and used `yarn` instead
- Refactored [files](generators/app/files.js) manage and declaration
- Added `Fastlane` for `Android`

## [0.8.0] - 2020-04-08

- Added multiple env configuration (Debug, QA, Stage and Production) for Android and iOS projects
- Removed unused targets from iOS project and Podfile ([Ruby script](generators/app/tasks/installTasks/scriptIosConfig.rb))
- Added configuration to use [firebaseFilesScript](generators/app/templates/googleServicesConfig/firebaseFilesScript.sh) script for Android and iOS projects to automatically copy Google services files
- Added secret files to `.gitignore`
- Added new Wolmo RN icons for Android and iOS projects

## [0.7.3] - 2020-04-03

- Fixed Push Notifications config on `AndroidManifest`
- Added again (temporary) the lane to change the `bundleId (update_bundle_identifier)` and a `TODO` in [editBundleIdentifier](generators/app/tasks/installTasks/editBundleIdentifier.js) task

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
