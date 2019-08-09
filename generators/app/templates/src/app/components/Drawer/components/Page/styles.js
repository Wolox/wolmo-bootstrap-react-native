import { StyleSheet } from 'react-native';

const IMAGE_SIZE = 20;
const MARGIN_LEFT = 30;

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 60,
    borderColor: 'grey',
    borderBottomWidth: 0.5,
    justifyContent: 'center'
  },
  image: {
    marginLeft: MARGIN_LEFT,
    height: IMAGE_SIZE,
    width: IMAGE_SIZE
  },
  text: {
    marginLeft: MARGIN_LEFT
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});
