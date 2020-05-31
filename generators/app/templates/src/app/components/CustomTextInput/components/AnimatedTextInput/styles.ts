import { StyleSheet } from 'react-native';
import fonts from '@config/fonts';
import { transparent, darkGray } from '@constants/colors';
import { SIZES } from '@constants/fonts';

export default StyleSheet.create({
  container: {
    height: 30
  },
  withLabel: {
    marginBottom: 10,
    marginTop: 35
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
    left: 5,
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
  errorMessage: {
    marginTop: 3
  }
});
