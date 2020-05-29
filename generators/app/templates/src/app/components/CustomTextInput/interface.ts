import { TextProps, TextInputProps, TextStyle, TouchableOpacityProps, ViewProps } from 'react-native';

export interface CustomTextInputProps extends TextInputProps, TextProps {
  borderColorStyle?: any;
  isFocused?: boolean;
  multiline?: boolean;
  showPassword?: boolean;
  textStyles?: TextStyle;
  onBlur?: TextInputProps['onBlur'];
  onChange?(e: any): any;
  onFocus?: TextInputProps['onFocus'];
  onShowPassword?: TouchableOpacityProps['onPress'];
  value?: string;
  placeholderColor?: string;
  showEye?: boolean;
  secureTextEntry?: boolean;
  style?: ViewProps['style'];
  autoCompleteType?: TextInputProps['autoCompleteType'];
  error?: boolean | string;
  disabled?: boolean;
  placeholder?: string;
  label?: string;
  labelStyle?: TextStyle;
}
