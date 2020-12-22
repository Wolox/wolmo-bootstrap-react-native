// BASE FOLDERS
module.exports.MOCKS = '__mocks__';
module.exports.TESTS = '__tests__';
module.exports.CI_PATH = '.woloxci';
module.exports.FONTS = 'assets/fonts';
module.exports.APP_PATH = 'src/app';
module.exports.CONFIG_PATH = 'src/config';
module.exports.CONSTANTS_PATH = 'src/constants';
module.exports.INTERFACES_PATH = 'src/interfaces';
module.exports.REDUX_PATH = 'src/redux';
module.exports.SERVICES_PATH = 'src/services';
module.exports.UTILS_PATH = 'src/utils';

// BASE FILES
module.exports.ESLINT_IGNORE_FILE = '.eslintignore';
module.exports.ESLINTRC_FILE = '.eslintrc.js';
module.exports.MAIN = 'App.js';
module.exports.BITRISE_YML = 'bitrise.yml';
module.exports.INDEX_D_FILE = 'index.d.ts';
module.exports.INDEX = 'index.js';
module.exports.JENKINS_FILE = 'Jenkinsfile';
module.exports.JEST_CONFIG_FILE = 'jest.config.js';
module.exports.PULL_REQUEST_TEMPLATE = 'pull_request_template.md';
module.exports.REACT_NATIVE_CONFIG = 'react-native.config.js';
module.exports.README = 'README.md';
module.exports.TSCONFIG_FILE = 'tsconfig.json';

// TESTS
module.exports.TESTS_REDUX_PATH = `${module.exports.TESTS}/redux`;
module.exports.TESTS_RESPONSES_PATH = `${module.exports.TESTS}/responses`;
module.exports.TESTS_SCREENS_PATH = `${module.exports.TESTS}/screens`;
// TESTS - REDUX
module.exports.TESTS_STORE = `${module.exports.TESTS_REDUX_PATH}/store.js`;
module.exports.TESTS_UTILS = `${module.exports.TESTS_REDUX_PATH}/utils.js`;
module.exports.TESTS_AUTH_PATH = `${module.exports.TESTS_REDUX_PATH}/auth`;

//  Wolox CI
module.exports.DOCKER_FILE = `${module.exports.CI_PATH}/Dockerfile`;
module.exports.CI_CONFIG_FILE = `${module.exports.CI_PATH}/config.yml`;

// APP
module.exports.COMPONENTS_PATH = `${module.exports.APP_PATH}/components`;
module.exports.HOOKS_PATH = `${module.exports.APP_PATH}/hooks`;
module.exports.SCREENS_PATH = `${module.exports.APP_PATH}/screens`;
module.exports.APP_I18N = `${module.exports.APP_PATH}/i18n.ts`;
module.exports.APP = `${module.exports.APP_PATH}/index.tsx`;

// APP COMPONENTS - APP NAVIGATOR
module.exports.APP_NAVIGATOR_PATH = `${module.exports.COMPONENTS_PATH}/AppNavigator`;
module.exports.APP_NAVIGATOR = `${module.exports.APP_NAVIGATOR_PATH}/index.tsx`;
module.exports.APP_NAVIGATOR_NAVIGATOR = `${module.exports.APP_NAVIGATOR_PATH}/navigator.tsx`;
module.exports.NAVIGATION_HELPER = `${module.exports.APP_NAVIGATOR_PATH}/helper.ts`;
// APP COMPONENTS - CUSTOM BUTTON
module.exports.CUSTOM_BUTTON_PATH = `${module.exports.COMPONENTS_PATH}/CustomButton`;
// APP COMPONENTS - CUSTOM STATUS BAR
module.exports.CUSTOM_STATUS_BAR = `${module.exports.COMPONENTS_PATH}/CustomStatusBar`;
// APP COMPONENTS - CUSTOM TEXT
module.exports.CUSTOM_TEXT_PATH = `${module.exports.COMPONENTS_PATH}/CustomText`;
// APP COMPONENTS - CUSTOM TEXT INPUT
module.exports.CUSTOM_TEXT_INPUT_PATH = `${module.exports.COMPONENTS_PATH}/CustomTextInput`;
// APP COMPONENTS - LOADABLE
module.exports.LOADABLE_PATH = `${module.exports.COMPONENTS_PATH}/Loadable`;

// APP SCREENS - HOME
module.exports.HOME_PATH = `${module.exports.SCREENS_PATH}/Home`;
module.exports.HOME = `${module.exports.HOME_PATH}/index.tsx`;
module.exports.HOME_STYLES = `${module.exports.HOME_PATH}/styles.ts`;
// AUTH SCREENS - LOGIN AND SIGNUP
module.exports.AUTH_PATH = `${module.exports.SCREENS_PATH}/Auth`;
// APP SCREENS - ONBOARDING
module.exports.ONBOARDING_PATH = `${module.exports.SCREENS_PATH}/OnBoarding`;

// CONFIG
module.exports.API_CONFIG = `${module.exports.CONFIG_PATH}/api.ts`;
module.exports.CONFIG = `${module.exports.CONFIG_PATH}/index.ts`;
module.exports.REACTOTRON_CONFIG = `${module.exports.CONFIG_PATH}/reactotronConfig.ts`;
module.exports.I18N_CONFIG = `${module.exports.CONFIG_PATH}/i18n.ts`;
module.exports.NAVIGATION_CONFIG = `${module.exports.CONFIG_PATH}/navigation.tsx`;
module.exports.FONTS_CONFIG = `${module.exports.CONFIG_PATH}/fonts.ts`;

// CONSTANTS
module.exports.PLATFORM_CONSTANTS = `${module.exports.CONSTANTS_PATH}/platform.ts`;
module.exports.SERIALIZERS_CONSTANTS = `${module.exports.CONSTANTS_PATH}/serializers.ts`;
module.exports.COLORS_CONSTANTS = `${module.exports.CONSTANTS_PATH}/colors.ts`;
module.exports.ROUTES_CONSTANTS = `${module.exports.CONSTANTS_PATH}/routes.ts`;
module.exports.FONTS_CONSTANTS = `${module.exports.CONSTANTS_PATH}/fonts.ts`;
module.exports.STATUS_BAR_CONSTANTS = `${module.exports.CONSTANTS_PATH}/statusBar.ts`;

// INTERFACES
module.exports.AUTH_INTERFACES = `${module.exports.INTERFACES_PATH}/authInterfaces.ts`;
module.exports.GLOBAL_INTERFACES = `${module.exports.INTERFACES_PATH}/globalInterfaces.ts`;
module.exports.NAVIGATION_INTERFACES = `${module.exports.INTERFACES_PATH}/navigation.ts`;
module.exports.REACTOTRON_INTERFACES = `${module.exports.INTERFACES_PATH}/reactotron.ts`;
module.exports.REDUX_INTERFACES = `${module.exports.INTERFACES_PATH}/reduxInterfaces.ts`;

// REDUX
module.exports.REDUX_STORE = `${module.exports.REDUX_PATH}/store.ts`;
// REDUX - AUTH
module.exports.AUTH_REDUX_PATH = `${module.exports.REDUX_PATH}/auth`;
module.exports.AUTH_ACTIONS = `${module.exports.AUTH_REDUX_PATH}/actions.ts`;
module.exports.AUTH_REDUCER = `${module.exports.AUTH_REDUX_PATH}/reducer.ts`;
// REDUX - MIDDLEWARES
module.exports.ANALYTICS_MIDDLEWARE = `${module.exports.REDUX_PATH}/middlewares/analyticsMiddleware.ts`;

// SERVICES
module.exports.AUTH_SERVICE = `${module.exports.SERVICES_PATH}/AuthService.ts`;
