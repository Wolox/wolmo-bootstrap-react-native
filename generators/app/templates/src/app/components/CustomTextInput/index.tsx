import React, { useState, memo } from 'react';
import { NativeSyntheticEvent } from 'react-native';
import withForm from '@components/withForm';
import { transparent } from '@constants/colors';

import AnimatedTextInput from './components/AnimatedTextInput';
import TextInput from './components/TextInput';
import { CustomTextInputProps } from './interface';
import styles from './styles';

interface Props extends CustomTextInputProps {
  animated?: boolean;
  bottomBorder?: boolean;
}

const CustomTextInput = ({
  animated,
  bottomBorder = true,
  disabled,
  error,
  onBlur,
  onFocus,
  placeholderColor,
  value,
  ...props
}: Props) => {
  const InputComponent = animated ? AnimatedTextInput : TextInput;
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);
  const handleShowPassword = () => setShowPassword(prevShowPassword => !prevShowPassword);
  const handleBlur = (e: NativeSyntheticEvent<any>) => {
    setIsFocused(false);
    if (onBlur) onBlur(e);
  };
  const handleFocus = (e: NativeSyntheticEvent<any>) => {
    setIsFocused(true);
    if (onFocus) onFocus(e);
  };
  const borderColorStyle = () => {
    if (!bottomBorder) return {};
    if (disabled) return styles.bottomBorderLightGray;
    if (isFocused) return styles.bottomBorderBlue;
    if (error) return styles.bottomBorderRed;
    return styles.bottomBorderGray;
  };
  return (
    <InputComponent
      {...props}
      borderColorStyle={borderColorStyle()}
      error={error}
      isFocused={isFocused}
      onBlur={handleBlur}
      onFocus={handleFocus}
      onShowPassword={handleShowPassword}
      placeholderColor={value ? transparent : placeholderColor}
      showPassword={showPassword}
      value={value}
    />
  );
};

CustomTextInput.defaultProps = {
  animated: false,
  autoCapitalize: 'none',
  autoCompleteType: 'off',
  autoCorrect: false,
  clearButtonMode: 'never',
  disabled: false,
  keyboardType: 'default',
  maxHeight: 200,
  multiline: false,
  placeholder: '',
  returnKeyType: 'done',
  underlineColorAndroid: transparent
};

const MyCustomTextInput = memo(CustomTextInput);

export const CustomTextInputField = withForm(MyCustomTextInput);

export default MyCustomTextInput;
