import { Platform, StatusBar, Dimensions } from 'react-native';

export const ROOT = 'root';

export const isAndroid = Platform.OS === 'android';
export const isIos = Platform.OS === 'ios';

const IOS_STATUS_BAR_HEIGHT = 20;
export const STATUS_BAR_HEIGHT = isIos ? IOS_STATUS_BAR_HEIGHT : StatusBar.currentHeight;
export const STATUS_BAR_IS_FIXED = isAndroid && Platform.Version < 21;
export const ACTION_BAR_HEIGHT = STATUS_BAR_IS_FIXED ? 74 : 64;
export const TABBAR_HEIGHT = 50;

const windowDimensions = Dimensions.get('window');
export const WINDOW_HEIGHT = windowDimensions.height;
export const WINDOW_WIDTH = windowDimensions.width;

export const VIEWPORT_HEIGHT =
  WINDOW_HEIGHT - TABBAR_HEIGHT - ACTION_BAR_HEIGHT - (STATUS_BAR_IS_FIXED ? STATUS_BAR_HEIGHT : 0);

export const IS_SMALL_DEVICE = WINDOW_HEIGHT < 570;
