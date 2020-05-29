import { StyleSheet } from 'react-native';
import { blue, gray, darkGray, red } from '@constants/colors';

const BORDER_WIDTH = { borderBottomWidth: 1 };

export default StyleSheet.create({
  bottomBorderGray: {
    ...BORDER_WIDTH,
    borderBottomColor: darkGray
  },
  bottomBorderBlue: {
    ...BORDER_WIDTH,
    borderBottomColor: blue
  },
  bottomBorderRed: {
    ...BORDER_WIDTH,
    borderBottomColor: red
  },
  bottomBorderLightGray: {
    ...BORDER_WIDTH,
    borderBottomColor: gray
  }
});
