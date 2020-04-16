import { StyleSheet } from 'react-native';
import { blue } from '@constants/colors';

export default StyleSheet.create({
  buttonContainer: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: blue,
    width: 100
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10
  }
});
