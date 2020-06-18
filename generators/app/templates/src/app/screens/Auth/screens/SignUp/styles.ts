import { StyleSheet } from 'react-native';
import { green } from '@constants/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center'
  },
  stretchAndFlex: {
    alignSelf: 'stretch'
  },
  form: {
    paddingHorizontal: 60,
    paddingBottom: 20
  },
  formButton: {
    backgroundColor: green,
    padding: 10,
    borderRadius: 3,
    marginTop: 15
  }
});
