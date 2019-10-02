import { StyleSheet } from 'react-native';
import fonts from '@config/fonts';
import { blue, white, green, gray, transparent } from '@constants/colors';
import { SIZES } from '@constants/fonts';
import { moderateScale } from '@utils/scalingUtils';

const getColors = colorsObj =>
  Object.keys(colorsObj)
    .map(colorName => ({ [colorName]: { color: colorsObj[colorName] } }))
    .reduce((colors, color) => ({ ...colors, ...color }), {});

const getSizes = sizesObj =>
  Object.keys(sizesObj)
    .map(sizeName => ({ [sizeName]: { fontSize: moderateScale(sizesObj[sizeName]) } }))
    .reduce((sizes, size) => ({ ...sizes, ...size }), {});

export default StyleSheet.create({
  base: {
    ...fonts.baseFont,
    backgroundColor: transparent
  },
  semiBold: fonts.semiBoldFont,
  bold: fonts.boldFont,
  italic: fonts.baseItalicFont,
  center: {
    textAlign: 'center'
  },
  justify: {
    textAlign: 'justify'
  },
  right: {
    textAlign: 'right'
  },
  // Colors
  ...getColors({ blue, gray, green, white }),
  // Sizes
  ...getSizes({
    xxsmall: SIZES.XXSMALL,
    xsmall: SIZES.XSMALL,
    small: SIZES.SMALL,
    medium: SIZES.MEDIUM,
    xmedium: SIZES.XMEDIUM,
    big: SIZES.BIG,
    xbig: SIZES.XBIG
  })
});
