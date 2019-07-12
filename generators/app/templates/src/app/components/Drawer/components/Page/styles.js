import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: 60,
    borderColor: 'grey',
    borderBottomWidth: 0.5,
    justifyContent: 'center'
  },
  image: {
    marginLeft: 30,
    height: 20,
    width: 20
  },
  text: {
    marginLeft: 30
  },
  imageContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start'
  }
});
