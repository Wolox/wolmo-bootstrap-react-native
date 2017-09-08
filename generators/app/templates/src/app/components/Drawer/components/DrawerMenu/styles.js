import { StyleSheet } from 'react-native';

import { green, blue } from '../../../../../constants/colors';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: blue,
    alignItems: 'center',
    justifyContent: 'center'
  },
  clickWrapper: {
    flex: 1
  },
  closeButton: {
    padding: 10,
    borderRadius: 3,
    backgroundColor: green
  }
});
