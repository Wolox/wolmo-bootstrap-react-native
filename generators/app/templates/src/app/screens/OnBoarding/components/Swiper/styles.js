import { StyleSheet } from 'react-native';
import { blue, black } from '@constants/colors';

const DOT_SIZE = 12;
const ACTIVE_DOT_SIZE = 15;
const styles = StyleSheet.create({
  pagination: {
    position: 'absolute',
    bottom: 34
  },
  activeDot: {
    backgroundColor: blue,
    width: ACTIVE_DOT_SIZE,
    height: ACTIVE_DOT_SIZE,
    borderRadius: 10
  },
  dot: {
    backgroundColor: black,
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: 10
  }
});

export default styles;
