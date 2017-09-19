import { StyleSheet } from 'react-native';

import { blue, white, green, gray, black, transparent } from '../../../constants/colors';
import { IS_SMALL_DEVICE } from '../../../constants/platform';

const amountToResize = 2 * IS_SMALL_DEVICE;

export default StyleSheet.create({
  base: {
    fontSize: 16 - amountToResize,
    backgroundColor: transparent,
    color: black
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
  bold: {
    fontWeight: 'bold'
  },
  center: {
    textAlign: 'center'
  }
});
