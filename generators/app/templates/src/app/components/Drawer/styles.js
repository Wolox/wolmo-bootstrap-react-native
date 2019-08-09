import { StyleSheet } from 'react-native';
import { isIos } from '@constants/platform';

export const medium = { medium: 'medium' };

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    marginTop: isIos ? 30 : 0
  }
});
