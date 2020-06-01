import { StyleSheet } from 'react-native';
import { transparent } from '@constants/colors';
import { SIZES } from '@constants/fonts';
import fonts from '@config/fonts';

export default StyleSheet.create({
  label: {
    ...fonts.baseFont,
    backgroundColor: transparent,
    fontSize: SIZES.XSMALL,
    marginTop: 5
  },
  animatedlabel: {
    left: 5,
    position: 'absolute'
  }
});
