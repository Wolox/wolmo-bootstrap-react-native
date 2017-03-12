import { Platform, StatusBar, Dimensions } from 'react-native';

exports.isAndroid = Platform.OS === 'android';
exports.isIos = Platform.OS === 'ios';

const IOS_STATUS_BAR_HEIGHT = 20;
exports.STATUS_BAR_HEIGHT = exports.isIos ? IOS_STATUS_BAR_HEIGHT : StatusBar.currentHeight;
exports.STATUS_BAR_IS_FIXED = exports.isAndroid && Platform.Version < 21;
exports.ACTION_BAR_HEIGHT = exports.STATUS_BAR_IS_FIXED ? 74 : 64;
exports.TABBAR_HEIGHT = 50;

const windowDimensions = Dimensions.get('window');
exports.WINDOW_HEIGHT = windowDimensions.height;
exports.WINDOW_WIDTH = windowDimensions.width;

exports.VIEWPORT_HEIGHT = exports.WINDOW_HEIGHT -
  exports.TABBAR_HEIGHT -
  exports.ACTION_BAR_HEIGHT -
  (exports.STATUS_BAR_IS_FIXED ? exports.STATUS_BAR_HEIGHT : 0);
