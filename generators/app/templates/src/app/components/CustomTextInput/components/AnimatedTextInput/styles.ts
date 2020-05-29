import { StyleSheet } from 'react-native';
import fonts from '@config/fonts';
import { transparent, darkGray } from '@constants/colors';
import { SIZES } from '@constants/fonts';

const INPUT_PADDING = 5;

export default StyleSheet.create({
  containerWithLabel: {
    marginTop: 35,
    alignSelf: 'stretch'
  },
  inputContainer: {
    flexDirection: 'row',
    height: 25,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  label: {
    ...fonts.baseFont,
    backgroundColor: transparent,
    fontSize: SIZES.XSMALL,
    position: 'absolute',
    left: INPUT_PADDING,
    marginTop: 3
  },
  inputStyle: {
    ...fonts.baseFont,
    fontSize: SIZES.SMALL,
    color: darkGray,
    padding: 0,
    marginHorizontal: 0,
    marginBottom: 0
  },
  singleInput: {
    flex: 1
  },
  offset: {
    height: 80
  },
  errorMessage: {
    marginTop: 3
  }
});
