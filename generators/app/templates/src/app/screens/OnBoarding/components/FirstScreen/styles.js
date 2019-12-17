import { StyleSheet } from 'react-native';
import { green, blue } from '@constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: green,
    paddingBottom: 60
  },
  buttonContainer: {
    padding: 10,
    borderWidth: 1,
    borderRadius: 4,
    borderColor: blue
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    paddingHorizontal: 10
  }
});
