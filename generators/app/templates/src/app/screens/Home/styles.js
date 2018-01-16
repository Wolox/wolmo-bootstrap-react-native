import { StyleSheet } from 'react-native';

import { green } from '../../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  },
  mainButton: {
    backgroundColor: green,
    padding: 10,
    borderRadius: 3
  }
});
