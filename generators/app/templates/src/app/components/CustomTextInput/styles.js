import { StyleSheet } from 'react-native';

import { gray, black, transparent } from '../../../constants/colors';

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
  singleInput: {
    color: black,
    flex: 1
  },
  multilineInput: {
    color: black,
    paddingTop: 10,
    fontSize: 14,
    paddingLeft: 0
  },
  bottomBorder: {
    borderBottomWidth: 1,
    borderBottomColor: gray
  },
  inputStyle: {
    paddingHorizontal: 0,
    marginHorizontal: 0,
    marginBottom: 0,
    paddingBottom: 0
  },
  title: {
    marginTop: 5,
    backgroundColor: transparent
  }
});
