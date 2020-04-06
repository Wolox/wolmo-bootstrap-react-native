export interface AnimatedCustomTextInputProps
  extends TextInputProps,
    TextProps {
  bottomBorder?: boolean;
  multiline?: boolean;
  placeholder?: string;
  textStyles?: TextStyle;
  onBlur?: TextInputProps["onBlur"];
  onChange?(e: any): any;
  onFocus?: TextInputProps["onFocus"];
  value?: string;
  placeholderTextColor?: string;
  showEye?: boolean;
  secureTextEntry?: boolean;
  style?: ViewProps["style"];
  label?: string;
  labelStyle?: TextProps["style"];
  autoCompleteType?: TextInputProps["autoCompleteType"];
  error?: boolean | string;
  disabled?: boolean;
}
