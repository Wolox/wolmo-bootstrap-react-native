import { TouchableOpacityProps, ViewStyle, ImageStyle, TextStyle } from 'react-native';
import { VariantsInterface } from '@components/CustomText/constants';

export const VARIANTS = ['borderless', 'radial', 'black', 'green', 'white', 'gray'];

export interface CustomButtonProps extends VariantsInterface {
  onPress: TouchableOpacityProps['onPress'];
  activeOpacity?: number;
  disabled?: boolean;
  icon?: number;
  iconStyle?: ImageStyle;
  style?: ViewStyle;
  textStyle?: TextStyle;
  title?: string;
  secondary?: boolean;
  isLoading?: boolean;
  borderless?: boolean;
  isRegularText?: boolean;
  isTransparentButton?: boolean;
}
