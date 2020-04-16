// BASE PATHS
module.exports.MOCKS = '__mocks__';
module.exports.TESTS = '__tests__';
module.exports.CI_PATH = '.woloxci';
module.exports.FONTS = 'assets/fonts';
module.exports.IOS_PATH = 'ios';
module.exports.APP_PATH = 'src/app';
module.exports.CONFIG_PATH = 'src/config';
module.exports.CONSTANTS_PATH = 'src/constants';
module.exports.REDUX_PATH = 'src/redux';
module.exports.SERVICES_PATH = 'src/services';
module.exports.UTILS_PATH = 'src/utils';
module.exports.TEST_PATH = 'test';

// BASE FILES
module.exports.TSCONFIG_FILE = 'tsconfig.json';
module.exports.INDEX_D_FILE = 'index.d.ts';
module.exports.ESLINTRC_FILE = '.eslintrc.js';
module.exports.ESLINT_IGNORE_FILE = '.eslintignore';
module.exports.REACT_NATIVE_CONFIG = 'react-native.config.js';
module.exports.JENKINS_FILE = 'Jenkinsfile';
module.exports.DOCKER_FILE = `${module.exports.CI_PATH}/Dockerfile`;
module.exports.CI_CONFIG_FILE = `${module.exports.CI_PATH}/config.yml`;
module.exports.PULL_REQUEST_TEMPLATE = 'pull_request_template.md';
module.exports.MAIN = 'App.js';
module.exports.README = 'README.md';
module.exports.INDEX = 'index.js';
module.exports.APP = `${module.exports.APP_PATH}/index.js`;

// TESTING - TESTS
module.exports.TESTS_COMPONENTS_PATH = `${module.exports.TESTS}/components`;
module.exports.TESTS_REDUX_PATH = `${module.exports.TESTS}/redux`;
module.exports.TESTS_RESPONSES_PATH = `${module.exports.TESTS}/responses`;
module.exports.TESTS_SCREENS_PATH = `${module.exports.TESTS}/screens`;
module.exports.TESTS_SETUP_PATH = `${module.exports.TESTS}/setup`;

// TESTING - RESPONSES-EXAMPLES
module.exports.TESTS_RESPONSES_EXAMPLES = `${module.exports.TESTS_RESPONSES_PATH}/examples.js`;
// TESTING - TESTS-REDUX
module.exports.TESTS_STORE = `${module.exports.TESTS_REDUX_PATH}/store.js`;
module.exports.TESTS_UTILS = `${module.exports.TESTS_REDUX_PATH}/utils.js`;
module.exports.TESTS_AUTH_PATH = `${module.exports.TESTS_REDUX_PATH}/auth`;

// TESTING - TESTS-SETUP
module.exports.TESTS_SETUP_ENZYME = `${module.exports.TESTS_SETUP_PATH}/setupEnzyme.js`;

// TESTING - SCREENS-LOGIN
module.exports.TESTS_LOGIN_SCREEN_PATH = `${module.exports.TESTS_SCREENS_PATH}/Login`;

// SCREENS
module.exports.SCREENS_PATH = `${module.exports.APP_PATH}/screens`;
module.exports.APP_I18N = `${module.exports.APP_PATH}/i18n.js`;

// SCREENS - HOME
module.exports.HOME_PATH = `${module.exports.SCREENS_PATH}/Home`;
module.exports.HOME_STYLES = `${module.exports.HOME_PATH}/styles.js`;
module.exports.HOME = `${module.exports.HOME_PATH}/layout.js`;

// SCREENS - LOGIN
module.exports.LOGIN_PATH = `${module.exports.SCREENS_PATH}/Login`;

// SCREENS - INITIAL LOADING
module.exports.INITIAL_LOADING_PATH = `${module.exports.SCREENS_PATH}/InitialLoading`;
module.exports.INITIAL_LOADING = `${module.exports.INITIAL_LOADING_PATH}/index.js`;

// SCREENS - ONBOARDING
module.exports.ONBOARDING_PATH = `${module.exports.SCREENS_PATH}/OnBoarding`;

// COMPONENTS
module.exports.COMPONENTS_PATH = `${module.exports.APP_PATH}/components`;

// COMPONENTS - APP NAVIGATOR
module.exports.APP_NAVIGATOR_PATH = `${module.exports.COMPONENTS_PATH}/AppNavigator`;
module.exports.APP_NAVIGATOR = `${module.exports.APP_NAVIGATOR_PATH}/index.js`;
module.exports.APP_NAVIGATOR_NAVIGATOR = `${module.exports.APP_NAVIGATOR_PATH}/navigator.js`;

// COMPONENTS - CUSTOM TEXT
module.exports.CUSTOM_TEXT_PATH = `${module.exports.COMPONENTS_PATH}/CustomText`;

// COMPONENTS - CUSTOM TEXT INPUT
module.exports.CUSTOM_TEXT_INPUT_PATH = `${module.exports.COMPONENTS_PATH}/CustomTextInput`;

// COMPONENTS - CUSTOM TEXT
module.exports.CUSTOM_BUTTON_PATH = `${module.exports.COMPONENTS_PATH}/CustomButton`;

// COMPONENTS - LOADABLE
module.exports.LOADABLE_PATH = `${module.exports.COMPONENTS_PATH}/Loadable`;

// REDUX
module.exports.REDUX_STORE = `${module.exports.REDUX_PATH}/store.js`;
// REDUX - AUTH
module.exports.AUTH_REDUX_PATH = `${module.exports.REDUX_PATH}/auth`;
module.exports.AUTH_ACTIONS = `${module.exports.AUTH_REDUX_PATH}/actions.js`;
module.exports.AUTH_REDUCER = `${module.exports.AUTH_REDUX_PATH}/reducer.js`;

// REDUX - MIDDLEWARES
module.exports.ANALYTICS_MIDDLEWARE = `${module.exports.REDUX_PATH}/middlewares/analyticsMiddleware.js`;

// SERVICES
module.exports.AUTH_SERVICE = `${module.exports.SERVICES_PATH}/AuthService.js`;
module.exports.ONBOARDING_SERVICE = `${module.exports.SERVICES_PATH}/OnBoardingService.js`;

// CONFIG
module.exports.PUSH_NOTIFICATIONS_CONFIG = `${module.exports.CONFIG_PATH}/pushNotifications.js`;
module.exports.API_CONFIG = `${module.exports.CONFIG_PATH}/api.js`;
module.exports.CONFIG = `${module.exports.CONFIG_PATH}/index.js`;
module.exports.REACTOTRON_CONFIG = `${module.exports.CONFIG_PATH}/reactotronConfig.js`;
module.exports.I18N_CONFIG = `${module.exports.CONFIG_PATH}/i18n.js`;
module.exports.NAVIGATION_CONFIG = `${module.exports.CONFIG_PATH}/navigation.js`;
module.exports.FONTS_CONFIG = `${module.exports.CONFIG_PATH}/fonts.js`;

// CONSTANTS
module.exports.PLATFORM_CONSTANTS = `${module.exports.CONSTANTS_PATH}/platform.js`;
module.exports.COLORS_CONSTANTS = `${module.exports.CONSTANTS_PATH}/colors.js`;
module.exports.ROUTES_CONSTANTS = `${module.exports.CONSTANTS_PATH}/routes.js`;
module.exports.FONTS_CONSTANTS = `${module.exports.CONSTANTS_PATH}/fonts.js`;
module.exports.STATUS_BAR_CONSTANTS = `${module.exports.CONSTANTS_PATH}/statusBar.js`;

// TEST
module.exports.TEST_ESLINT_CONFIG = `${module.exports.TEST_PATH}/.eslintrc.js`;

// BITRISE YML
module.exports.BITRISE_YML = 'bitrise.yml';
