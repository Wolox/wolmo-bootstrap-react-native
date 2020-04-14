import { TextProps, TextInputProps, TextStyle, ViewProps } from 'react-native';

export interface CustomTextInputProps extends TextInputProps, TextProps {
  bottomBorder?: boolean;
  multiline?: boolean;
  textStyles?: TextStyle;
  onBlur?: TextInputProps['onBlur'];
  onChange?(e: any): any;
  onFocus?: TextInputProps['onFocus'];
  value?: string;
  placeholderTextColor?: string;
  showEye?: boolean;
  secureTextEntry?: boolean;
  style?: ViewProps['style'];
  autoCompleteType?: TextInputProps['autoCompleteType'];
  title?: string;
  titleStyles?: TextStyle;
  error?: boolean | string;
}
