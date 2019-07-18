import { StyleSheet } from 'react-native';
import fonts from '@config/fonts';
import { blue, white, green, gray, transparent } from '@constants/colors';
import { IS_SMALL_DEVICE } from '@constants/platform';

const amountToResize = 2 * IS_SMALL_DEVICE;

export default StyleSheet.create({
  base: {
    ...fonts.baseFont,
    backgroundColor: transparent
  },
  gray: {
    color: gray
  },
  white: {
    color: white
  },
  blue: {
    color: blue
  },
  green: {
    color: green
  },
  xxsmall: {
    fontSize: 7 - amountToResize
  },
  xsmall: {
    fontSize: 11 - amountToResize
  },
  small: {
    fontSize: 13 - amountToResize
  },
  medium: {
    fontSize: 14 - amountToResize
  },
  big: {
    fontSize: 20 - amountToResize
  },
  xbig: {
    fontSize: 37 - amountToResize
  },
  center: {
    textAlign: 'center'
  }
});
