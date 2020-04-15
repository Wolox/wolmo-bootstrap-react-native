import { StyleSheet } from 'react-native';
import fonts from '@config/fonts';
import { black, blue, transparent, gray, darkGray, red } from '@constants/colors';
import { SIZES } from '@constants/fonts';

const INPUT_PADDING = 5;

export default StyleSheet.create({
  containerWithLabel: {
    marginTop: 10,
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
  borderWidth: {
    borderBottomWidth: 1
  },
  bottomBorderGray: {
    borderBottomColor: black
  },
  bottomBorderBlue: {
    borderBottomColor: blue
  },
  bottomBorderRed: {
    borderBottomColor: red
  },
  bottomBorderLightGray: {
    borderBottomColor: gray
  },
  offset: {
    height: 80
  },
  errorMessage: {
    marginTop: 3
  }
});
