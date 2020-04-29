import { StyleSheet } from 'react-native';
import { blue, black, green } from '@constants/colors';

const DOT_SIZE = 12;
const ACTIVE_DOT_SIZE = 15;
const BORDER_RADIUS = 10;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: green
  },
  pagination: {
    position: 'absolute',
    bottom: 34
  },
  activeDot: {
    backgroundColor: blue,
    width: ACTIVE_DOT_SIZE,
    height: ACTIVE_DOT_SIZE,
    borderRadius: BORDER_RADIUS
  },
  dot: {
    backgroundColor: black,
    width: DOT_SIZE,
    height: DOT_SIZE,
    borderRadius: 10
  }
});

export default styles;
