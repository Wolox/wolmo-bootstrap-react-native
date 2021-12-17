import { FlexAlignType, StyleSheet } from 'react-native';
import { white, gray } from '@constants/colors';

const LIGHT_GRAY: string = '#e1e1e1';
const MARGIN_TOP: number = 20;
const MID_SPACE: number = 15;
const SHADOW_OFFSET: number = 8;
const ALIGN_CENTER: FlexAlignType = 'center';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: ALIGN_CENTER
  },
  header: {
    marginTop: MARGIN_TOP,
    alignItems: ALIGN_CENTER
  },
  title: {
    fontWeight: 'bold'
  },
  content: {
    height: '70%',
    justifyContent: ALIGN_CENTER,
    alignItems: ALIGN_CENTER
  },
  description: {
    marginBottom: MID_SPACE
  },
  btn: {
    marginTop: MARGIN_TOP,
    borderRadius: 50,
    padding: MID_SPACE,
    backgroundColor: gray,
    elevation: 10,
    shadowOffset: {
      height: SHADOW_OFFSET,
      width: SHADOW_OFFSET
    },
    shadowOpacity: 1,
    shadowColor: LIGHT_GRAY
  },
  btn_text: {
    color: white
  }
});

export default styles;
