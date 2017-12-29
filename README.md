# Wolmo Bootstrap: React Native

## Prerequisites
- React native dev environment: https://facebook.github.io/react-native/docs/getting-started.html
- node & npm: https://github.com/creationix/nvm#install-script
- yarn: https://yarnpkg.com/lang/en/docs/install/#alternatives-tab
- ruby (for Fastlane): https://github.com/rbenv/rbenv#installation

## TL;DR
You don't need to clone this repository. Just run the following in your terminal:
```bash
bash <(curl -s https://raw.githubusercontent.com/Wolox/wolmo-bootstrap-react-native/master/run.sh)
```

## Description
This codebase is meant to be used to kickoff react native projects with Wolox's [tech stack](#tech-stack), [tools](#tooling) and [basic boilerplate](#boilerplate).
The following optional features can be added out of the box to the new projects:

- Login
- Drawer
- Tabs
- Push notifications
- Google Analytics

### Boilerplate

The boilerplate includes

- [Basic routes configuration for React Navigation](/generators/app/templates/src/screens.ejs)
- [Redux store intialization](/generators/app/templates/src/redux/store.ejs)
- [Reactotron config](/generators/app/templates/src/config/ReactotronConfig.ejs)
- [Basic constants](/generators/app/templates/src/constants)
- [Http client config](/generators/app/templates/src/config/api.js)
- [i18n config](/generators/app/templates/src/config/i18n.js)
- [Analytics Tracking](/generators/app/templates/src/redux/middlewares/analyticsMiddleware.js)

### Tech Stack

- [React](https://facebook.github.io/react/)
- [React Native](https://facebook.github.io/react-native/)
- [React Navigation](https://reactnavigation.org/)
- [Redux](http://redux.js.org/)
- [Redux Thunk](https://github.com/gaearon/redux-thunk)
- [Seamless Immutable](https://github.com/rtfeldman/seamless-immutable)
- [Apisauce](https://github.com/skellock/apisauce)
- [Reselect](https://github.com/reactjs/reselect)
- [React Native Config](https://github.com/luggit/react-native-config)
- [React Native i18n](https://github.com/AlexanderZaytsev/react-native-i18n)
- [Redux Beacon](For Google Analytics) (https://rangle.github.io/redux-beacon)

### Tooling

- [Eslint](http://eslint.org/)
- [Prettier](https://github.com/prettier/prettier)
- [Reactotron](https://github.com/infinitered/reactotron)

## Contributing

1. Fork it
2. Create your feature branch (`git checkout -b my-new-feature`)
3. Commit your changes (`git commit -am 'Add some feature'`)
4. Push to the branch (`git push origin my-new-feature`)
5. Create new Pull Request


## About

This project is maintained by [Sebastian Balay](https://github.com/sbalay) and it was written by [Wolox](http://www.wolox.com.ar).

![Wolox](https://raw.githubusercontent.com/Wolox/press-kit/master/logos/logo_banner.png)


## License

**wolmo-bootstrap-react-native** is available under the MIT [license](LICENSE).

    Copyright (c) 2017 Sebastián Balay <sebastian.balay@wolox.com.ar>

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
