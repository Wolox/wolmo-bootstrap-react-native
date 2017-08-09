import { StyleSheet } from 'react-native';

import { blue, white, green, gray, black, transparent } from '../../../utils/colors';
import { IS_SMALL_DEVICE } from '../../../utils/constants';

const amountToResize = 2 * IS_SMALL_DEVICE;

// Custom Text Style
// You can add styles to Base like Family Font to be the Text styles base!
// If you wanna a particular style you can add this like colors or sizes and then you have to
// add the prop into index.js

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
