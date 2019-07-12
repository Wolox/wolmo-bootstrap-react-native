import { StyleSheet } from 'react-native';

import { isIos } from '../../../constants/platform';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: isIos ? 30 : 0
  }
});
