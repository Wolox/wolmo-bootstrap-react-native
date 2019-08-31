// BASE PATHS
module.exports.APP_PATH = "src/app";
module.exports.CONFIG_PATH = "src/config";
module.exports.REDUX_PATH = "src/redux";
module.exports.SERVICES_PATH = "src/services";
module.exports.UTILS_PATH = "src/utils";
module.exports.CONSTANTS_PATH = "src/constants";
module.exports.TEST_PATH = "test";
module.exports.IOS_PATH = "ios";
module.exports.CI_PATH = ".woloxci";

// BASE FILES
module.exports.JENKINS_FILE = "Jenkinsfile";
module.exports.DOCKER_FILE = `${module.exports.CI_PATH}/Dockerfile`;
module.exports.CI_CONFIG_FILE = `${module.exports.CI_PATH}/config.yml`;
module.exports.PULL_REQUEST_TEMPLATE = "pull_request_template.md";
module.exports.MAIN = "App.js";
module.exports.README = "README.md";
module.exports.INDEX = "index.js";
module.exports.APP = `${module.exports.APP_PATH}/index.js`;
module.exports.FASTLANE_EV = `${module.exports.IOS_PATH}/fastlane/config/.env`;

// TESTING FILES
module.exports.TESTS = "__tests__";
module.exports.MOCKS = "__mocks__";

// TESTING - MOCKS
module.exports.REACT_NATIVE_COMMUNITY_MOCK_PATH = `${
  module.exports.MOCKS
}/@react-native-community`;
module.exports.ASYNC_STORAGE_MOCK = `${
  module.exports.REACT_NATIVE_COMMUNITY_MOCK_PATH
}/async-storage.js`;
module.exports.I18NEXT_MOCK = `${module.exports.MOCKS}/i18next.js`;

// TESTING - TESTS
module.exports.TESTS_COMPONENTS_PATH = `${module.exports.TESTS}/components`;
module.exports.TESTS_REDUX_PATH = `${module.exports.TESTS}/redux`;
module.exports.TESTS_RESPONSES_PATH = `${module.exports.TESTS}/responses`;
module.exports.TESTS_SCREENS_PATH = `${module.exports.TESTS}/screens`;
module.exports.TESTS_SETUP_PATH = `${module.exports.TESTS}/setup`;

// TESTING - RESPONSES-EXAMPLES
module.exports.TESTS_RESPONSES_EXAMPLES = `${
  module.exports.TESTS_RESPONSES_PATH
}/examples.js`;
// TESTING - TESTS-REDUX
module.exports.TESTS_STORE = `${module.exports.TESTS_REDUX_PATH}/store.js`;
module.exports.TESTS_AUTH_PATH = `${module.exports.TESTS_REDUX_PATH}/auth`;

module.exports.TESTS_AUTH_ACTIONS = `${
  module.exports.TESTS_AUTH_PATH
}/actions.js`;
module.exports.TESTS_AUTH_REDUCER = `${
  module.exports.TESTS_AUTH_PATH
}/reducer.js`;

// TESTING - TESTS-SETUP
module.exports.TESTS_SETUP_ENZYME = `${
  module.exports.TESTS_SETUP_PATH
}/setupEnzyme.js`;

// TESTING - SCREENS-LOGIN
module.exports.TESTS_LOGIN_SCREEN_PATH = `${
  module.exports.TESTS_SCREENS_PATH
}/Login`;
module.exports.TESTS_LOGIN_SCREEN_TEST = `${
  module.exports.TESTS_LOGIN_SCREEN_PATH
}/testLoginScreen.js`;

// SCREENS
module.exports.SCREENS_PATH = `${module.exports.APP_PATH}/screens`;
module.exports.SCREENS = `${module.exports.APP_PATH}/screens.js`;
module.exports.APP_I18N = `${module.exports.APP_PATH}/i18n.js`;

// SCREENS - HOME
module.exports.HOME_PATH = `${module.exports.SCREENS_PATH}/Home`;
module.exports.HOME_STYLES = `${module.exports.HOME_PATH}/styles.js`;
module.exports.HOME = `${module.exports.HOME_PATH}/layout.js`;

// SCREENS - LOGIN
module.exports.LOGIN_PATH = `${module.exports.SCREENS_PATH}/Login`;
module.exports.LOGIN = `${module.exports.LOGIN_PATH}/index.js`;
module.exports.LOGIN_LAYOUT = `${module.exports.LOGIN_PATH}/layout.js`;
module.exports.LOGIN_STYLE = `${module.exports.LOGIN_PATH}/styles.js`;
module.exports.LOGIN_I18N = `${module.exports.LOGIN_PATH}/i18n.js`;

// SCREENS - INITIAL LOADING
module.exports.INITIAL_LOADING_PATH = `${
  module.exports.SCREENS_PATH
}/InitialLoading`;
module.exports.INITIAL_LOADING = `${
  module.exports.INITIAL_LOADING_PATH
}/index.js`;

// COMPONENTS
module.exports.COMPONENTS_PATH = `${module.exports.APP_PATH}/components`;

// COMPONENTS - APP NAVIGATOR
module.exports.APP_NAVIGATOR_PATH = `${
  module.exports.COMPONENTS_PATH
}/AppNavigator`;
module.exports.APP_NAVIGATOR = `${module.exports.APP_NAVIGATOR_PATH}/index.js`;

// COMPONENTS - CUSTOM TEXT
module.exports.CUSTOM_TEXT_PATH = `${
  module.exports.COMPONENTS_PATH
}/CustomText`;
module.exports.CUSTOM_TEXT = `${module.exports.CUSTOM_TEXT_PATH}/index.js`;
module.exports.CUSTOM_TEXT_STYLES = `${
  module.exports.CUSTOM_TEXT_PATH
}/styles.js`;

// COMPONENTS - CUSTOM TEXT INPUT
module.exports.CUSTOM_TEXT_INPUT_PATH = `${
  module.exports.COMPONENTS_PATH
}/CustomTextInput`;
module.exports.CUSTOM_TEXT_INPUT = `${
  module.exports.CUSTOM_TEXT_INPUT_PATH
}/index.js`;
module.exports.CUSTOM_TEXT_INPUT_STYLES = `${
  module.exports.CUSTOM_TEXT_INPUT_PATH
}/styles.js`;
module.exports.CUSTOM_TEXT_INPUT_ASSETS_PATH = `${
  module.exports.CUSTOM_TEXT_INPUT_PATH
}/assets`;
module.exports.CUSTOM_TEXT_INPUT_ASSETS_VISIBILITY = `${
  module.exports.CUSTOM_TEXT_INPUT_ASSETS_PATH
}/ic_visibility.png`;
module.exports.CUSTOM_TEXT_INPUT_ASSETS_VISIBILITY_2X = `${
  module.exports.CUSTOM_TEXT_INPUT_ASSETS_PATH
}/ic_visibility@2x.png`;
module.exports.CUSTOM_TEXT_INPUT_ASSETS_VISIBILITY_3X = `${
  module.exports.CUSTOM_TEXT_INPUT_ASSETS_PATH
}/ic_visibility@3x.png`;
module.exports.CUSTOM_TEXT_INPUT_ASSETS_VISIBILITY_OFF = `${
  module.exports.CUSTOM_TEXT_INPUT_ASSETS_PATH
}/ic_visibility_off.png`;
module.exports.CUSTOM_TEXT_INPUT_ASSETS_VISIBILITY_OFF_2X = `${
  module.exports.CUSTOM_TEXT_INPUT_ASSETS_PATH
}/ic_visibility_off@2x.png`;
module.exports.CUSTOM_TEXT_INPUT_ASSETS_VISIBILITY_OFF_3X = `${
  module.exports.CUSTOM_TEXT_INPUT_ASSETS_PATH
}/ic_visibility_off@3x.png`;
module.exports.CUSTOM_TEXT_INPUT_SHOW_PASSWORD_PATH = `${
  module.exports.CUSTOM_TEXT_INPUT_PATH
}/components/ShowPassword`;
module.exports.CUSTOM_TEXT_INPUT_SHOW_PASSWORD = `${
  module.exports.CUSTOM_TEXT_INPUT_SHOW_PASSWORD_PATH
}/index.js`;
module.exports.CUSTOM_TEXT_INPUT_SHOW_PASSWORD_STYLES = `${
  module.exports.CUSTOM_TEXT_INPUT_SHOW_PASSWORD_PATH
}/styles.js`;

// COMPONENTS - CUSTOM TEXT
module.exports.CUSTOM_BUTTON_PATH = `${
  module.exports.COMPONENTS_PATH
}/CustomButton`;
module.exports.CUSTOM_BUTTON = `${module.exports.CUSTOM_BUTTON_PATH}/index.js`;
module.exports.CUSTOM_BUTTON_STYLES = `${
  module.exports.CUSTOM_BUTTON_PATH
}/styles.js`;

// COMPONENTS - LOADABLE
module.exports.LOADABLE_PATH = `${module.exports.COMPONENTS_PATH}/Loadable`;
module.exports.LOADABLE = `${module.exports.LOADABLE_PATH}/index.js`;
module.exports.LOADABLE_STYLES = `${module.exports.LOADABLE_PATH}/styles.js`;

// REDUX
module.exports.REDUX_STORE = `${module.exports.REDUX_PATH}/store.js`;

// REDUX - PUSH NOTIFICATIONS
module.exports.PUSH_NOTIFICATIONS_REDUCER = `${
  module.exports.REDUX_PATH
}/pushNotifications/reducer.js`;
module.exports.PUSH_NOTIFICATIONS_ACTIONS = `${
  module.exports.REDUX_PATH
}/pushNotifications/actions.js`;

// REDUX - AUTH
module.exports.AUTH_REDUCER = `${module.exports.REDUX_PATH}/auth/reducer.js`;
module.exports.AUTH_ACTIONS = `${module.exports.REDUX_PATH}/auth/actions.js`;

// REDUX - MIDDLEWARES
module.exports.ANALYTICS_MIDDLEWARE = `${
  module.exports.REDUX_PATH
}/middlewares/analyticsMiddleware.js`;

// SERVICES
module.exports.PUSH_NOTIFICATIONS_SERVICE = `${
  module.exports.SERVICES_PATH
}/PushNotificationsService.js`;
module.exports.AUTH_SERVICE = `${module.exports.SERVICES_PATH}/AuthService.js`;

// CONFIG
module.exports.PUSH_NOTIFICATIONS_CONFIG = `${
  module.exports.CONFIG_PATH
}/pushNotifications.js`;
module.exports.HUAWEI_DEVICES_CONFIG = `${
  module.exports.CONFIG_PATH
}/huaweiPushNotifications.js`;
module.exports.API_CONFIG = `${module.exports.CONFIG_PATH}/api.js`;
module.exports.CONFIG = `${module.exports.CONFIG_PATH}/index.js`;
module.exports.REACTOTRON_CONFIG = `${
  module.exports.CONFIG_PATH
}/reactotronConfig.js`;
module.exports.I18N_CONFIG = `${module.exports.CONFIG_PATH}/i18n.js`;
module.exports.NAVIGATION_CONFIG = `${
  module.exports.CONFIG_PATH
}/navigation.js`;
module.exports.FONTS_CONFIG = `${module.exports.CONFIG_PATH}/fonts.js`;

// CONSTANTS
module.exports.PLATFORM_CONSTANTS = `${
  module.exports.CONSTANTS_PATH
}/platform.js`;
module.exports.COLORS_CONSTANTS = `${module.exports.CONSTANTS_PATH}/colors.js`;
module.exports.ROUTES_CONSTANTS = `${module.exports.CONSTANTS_PATH}/routes.js`;
module.exports.FONTS_CONSTANTS = `${module.exports.CONSTANTS_PATH}/fonts.js`;

// UTILS
module.exports.ARRAY_UTILS = `${module.exports.UTILS_PATH}/arrayUtils.js`;
module.exports.NAV_UTILS = `${module.exports.UTILS_PATH}/navUtils.js`;
module.exports.STYLE_UTILS = `${module.exports.UTILS_PATH}/styleUtils.js`;
module.exports.SCALING_UTILS = `${module.exports.UTILS_PATH}/scalingUtils.js`;
module.exports.FONT_UTILS = `${module.exports.UTILS_PATH}/fontUtils.js`;

// TEST
module.exports.TEST_ESLINT_CONFIG = `${module.exports.TEST_PATH}/.eslintrc.js`;
