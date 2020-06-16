import { StyleSheet } from 'react-native';
import { green } from '@constants/colors';

export default StyleSheet.create({
  container: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    width: '100%'
  },
  form: {
    width: 250
  },
  formButton: {
    backgroundColor: green,
    padding: 10,
    borderRadius: 3,
    marginTop: 15
  }
});
