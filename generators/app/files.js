// BASE PATHS
module.exports.APP_PATH = 'src/app';
module.exports.CONFIG_PATH = 'src/config';
module.exports.REDUX_PATH = 'src/redux';
module.exports.SERVICES_PATH = 'src/services';
module.exports.UTILS_PATH = 'src/utils';
module.exports.CONSTANTS_PATH = 'src/constants';
module.exports.TEST_PATH = 'test';

// BASE FILES
module.exports.CIRCLE_CONFIG = 'circle.yml';
module.exports.PULL_REQUEST_TEMPLATE = 'pull_request_template.md';
module.exports.MAIN = 'App.js';
module.exports.README = 'README.md';
module.exports.INDEX = 'index.js';
module.exports.APP = `${module.exports.APP_PATH}/index.js`;

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
module.exports.INITIAL_LOADING_PATH = `${module.exports.SCREENS_PATH}/InitialLoading`;
module.exports.INITIAL_LOADING = `${module.exports.INITIAL_LOADING_PATH}/index.js`;

// COMPONENTS
module.exports.COMPONENTS_PATH = `${module.exports.APP_PATH}/components`;

// COMPONENTS - APP NAVIGATOR
module.exports.APP_NAVIGATOR_PATH = `${module.exports.COMPONENTS_PATH}/AppNavigator`;
module.exports.APP_NAVIGATOR = `${module.exports.APP_NAVIGATOR_PATH}/index.js`;

// COMPONENTS - CUSTOM TEXT
module.exports.CUSTOM_TEXT_PATH = `${module.exports.COMPONENTS_PATH}/CustomText`;
module.exports.CUSTOM_TEXT = `${module.exports.CUSTOM_TEXT_PATH}/index.js`;
module.exports.CUSTOM_TEXT_STYLES = `${module.exports.CUSTOM_TEXT_PATH}/styles.js`;

// COMPONENTS - CUSTOM TEXT INPUT
module.exports.CUSTOM_TEXT_INPUT_PATH = `${module.exports.COMPONENTS_PATH}/CustomTextInput`;
module.exports.CUSTOM_TEXT_INPUT = `${module.exports.CUSTOM_TEXT_INPUT_PATH}/index.js`;
module.exports.CUSTOM_TEXT_INPUT_STYLES = `${module.exports.CUSTOM_TEXT_INPUT_PATH}/styles.js`;
module.exports.CUSTOM_TEXT_INPUT_ASSETS_PATH = `${module.exports.CUSTOM_TEXT_INPUT_PATH}/assets`;
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
module.exports.CUSTOM_BUTTON_PATH = `${module.exports.COMPONENTS_PATH}/CustomButton`;
module.exports.CUSTOM_BUTTON = `${module.exports.CUSTOM_BUTTON_PATH}/index.js`;
module.exports.CUSTOM_BUTTON_STYLES = `${module.exports.CUSTOM_BUTTON_PATH}/styles.js`;

// COMPONENTS - DRAWER
module.exports.DRAWER_PATH = `${module.exports.COMPONENTS_PATH}/Drawer`;
module.exports.DRAWER_INDEX = `${module.exports.DRAWER_PATH}/index.js`;
module.exports.DRAWER_MENU_PATH = `${module.exports.DRAWER_PATH}/components/DrawerMenu`;
module.exports.DRAWER_MENU_INDEX = `${module.exports.DRAWER_MENU_PATH}/index.js`;
module.exports.DRAWER_MENU_STYLES = `${module.exports.DRAWER_MENU_PATH}/styles.js`;
module.exports.DRAWER_MENU_LAYOUT = `${module.exports.DRAWER_MENU_PATH}/layout.js`;
module.exports.DRAWER_OVERLAY_PATH = `${module.exports.DRAWER_PATH}/components/DrawerOverlay`;
module.exports.DRAWER_OVERLAY_INDEX = `${module.exports.DRAWER_OVERLAY_PATH}/index.js`;
module.exports.DRAWER_OVERLAY_STYLES = `${module.exports.DRAWER_OVERLAY_PATH}/styles.js`;

// COMPONENTS - LOADABLE
module.exports.LOADABLE_PATH = `${module.exports.COMPONENTS_PATH}/Loadable`;
module.exports.LOADABLE = `${module.exports.LOADABLE_PATH}/index.js`;
module.exports.LOADABLE_STYLES = `${module.exports.LOADABLE_PATH}/styles.js`;

// REDUX
module.exports.REDUX_STORE = `${module.exports.REDUX_PATH}/store.js`;

// REDUX - PUSH NOTIFICATIONS
module.exports.PUSH_NOTIFICATIONS_REDUCER = `${module.exports.REDUX_PATH}/pushNotifications/reducer.js`;
module.exports.PUSH_NOTIFICATIONS_ACTIONS = `${module.exports.REDUX_PATH}/pushNotifications/actions.js`;

// REDUX - DRAWER
module.exports.DRAWER_REDUX_ACTIONS = `${module.exports.REDUX_PATH}/drawer/actions.js`;
module.exports.DRAWER_REDUX_REDUCER = `${module.exports.REDUX_PATH}/drawer/reducer.js`;

// REDUX - AUTH
module.exports.AUTH_REDUCER = `${module.exports.REDUX_PATH}/auth/reducer.js`;
module.exports.AUTH_ACTIONS = `${module.exports.REDUX_PATH}/auth/actions.js`;

// REDUX - MIDDLEWARES
module.exports.ANALYTICS_MIDDLEWARE = `${module.exports.REDUX_PATH}/middlewares/analyticsMiddleware.js`;

// SERVICES
module.exports.PUSH_NOTIFICATIONS_SERVICE = `${module.exports.SERVICES_PATH}/PushNotificationsService.js`;
module.exports.AUTH_SERVICE = `${module.exports.SERVICES_PATH}/AuthService.js`;

// CONFIG
module.exports.PUSH_NOTIFICATIONS_CONFIG = `${module.exports.CONFIG_PATH}/PushNotifications.js`;
module.exports.HUAWEI_DEVICES_CONFIG = `${module.exports.CONFIG_PATH}/HuaweiPushNotifications.js`;
module.exports.API_CONFIG = `${module.exports.CONFIG_PATH}/api.js`;
module.exports.CONFIG = `${module.exports.CONFIG_PATH}/index.js`;
module.exports.REACTOTRON_CONFIG = `${module.exports.CONFIG_PATH}/ReactotronConfig.js`;
module.exports.I18N_CONFIG = `${module.exports.CONFIG_PATH}/i18n.js`;
module.exports.NAVIGATION_CONFIG = `${module.exports.CONFIG_PATH}/navigation.js`;

// CONSTANTS
module.exports.PLATFORM_CONSTANTS = `${module.exports.CONSTANTS_PATH}/platform.js`;
module.exports.COLORS_CONSTANTS = `${module.exports.CONSTANTS_PATH}/colors.js`;
module.exports.ROUTES_CONSTANTS = `${module.exports.CONSTANTS_PATH}/routes.js`;

// UTILS
module.exports.ARRAY_UTILS = `${module.exports.UTILS_PATH}/arrayUtils.js`;
module.exports.I18N_UTILS = `${module.exports.UTILS_PATH}/i18nUtils.js`;
module.exports.NAV_UTILS = `${module.exports.UTILS_PATH}/navUtils.js`;
module.exports.STYLE_UTILS = `${module.exports.UTILS_PATH}/styleUtils.js`;

// TEST
module.exports.TEST_ESLINT_CONFIG = `${module.exports.TEST_PATH}/.eslintrc.js`;
