import { StyleSheet } from 'react-native';

import { blue } from '../../../../../constants/colors';

export default StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    bottom: -4
  },
  icon: {
    width: 30,
    tintColor: blue
  }
});
