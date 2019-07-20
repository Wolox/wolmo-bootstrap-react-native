import { StyleSheet } from 'react-native';
import { green, blue, transparent } from '@constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  formElementContainer: {
    backgroundColor: transparent,
    borderBottomColor: blue,
    borderBottomWidth: 1
  },
  formElement: {
    padding: 3,
    margin: 5,
    backgroundColor: transparent,
    height: 30,
    width: 200
  },
  formButton: {
    backgroundColor: green,
    padding: 10,
    borderRadius: 3,
    margin: 20
  }
});
