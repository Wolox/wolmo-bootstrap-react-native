import { TextProps, TextInputProps, TextStyle, ViewProps } from 'react-native';

export interface CustomTextInputProps extends TextInputProps, TextProps {
  animated?: boolean;
  autoCompleteType?: TextInputProps['autoCompleteType'];
  disabled?: boolean;
  error?: boolean | string;
  errorContainerStyle?: ViewProps['style'];
  errorStyle?: TextStyle;
  inputContainerStyle?: ViewProps['style'];
  inputTextStyles?: TextStyle;
  isFocused: boolean;
  label?: string;
  labelStyle?: TextStyle;
  multiline?: boolean;
  onBlur?: TextInputProps['onBlur'];
  onChange?(e: any): any;
  onFocus?: TextInputProps['onFocus'];
  placeholder?: string;
  placeholderColor?: string;
  secureTextEntry?: boolean;
  showError?: boolean;
  showEye?: boolean;
  style?: ViewProps['style'];
  value?: string;
}
