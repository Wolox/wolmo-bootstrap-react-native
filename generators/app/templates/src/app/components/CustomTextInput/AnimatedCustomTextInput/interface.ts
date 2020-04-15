import { TextProps } from 'react-native';

import { CustomTextInputProps } from '../interface';

export interface AnimatedCustomTextInputProps extends CustomTextInputProps {
  placeholder?: string;
  label?: string;
  labelStyle?: TextProps['style'];
  disabled?: boolean;
  initialValue?: string;
}
