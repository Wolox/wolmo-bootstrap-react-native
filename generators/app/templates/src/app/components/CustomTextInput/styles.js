import { StyleSheet } from 'react-native';
import fonts from '@config/fonts';
import { gray, transparent } from '@constants/colors';

export default StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 42,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  multilineContainer: {
    flex: 1
  },
  inputStyle: {
    ...fonts.baseFont,
    padding: 0,
    marginHorizontal: 0,
    marginBottom: 0
  },
  singleInput: {
    flex: 1
  },
  multilineInput: {
    paddingTop: 10,
    paddingLeft: 0
  },
  bottomBorder: {
    borderBottomWidth: 1,
    borderBottomColor: gray
  },
  title: {
    marginTop: 5,
    backgroundColor: transparent
  }
});
