import React, { useCallback, useState, memo, forwardRef } from 'react';
import { TextInput, View } from 'react-native';
import CustomText from '@components/CustomText';
import { transparent } from '@constants/colors';

import InputLabel from './components/InputLabel';
import ShowPassword from './components/ShowPassword';
import { CustomTextInputProps as Props } from './interface';
import styles from './styles';

const CustomTextInput = forwardRef<TextInput, Props>(function CustomTextInput(
  {
    animated,
    autoCompleteType,
    disabled,
    error,
    errorContainerStyle,
    errorStyle,
    inputContainerStyle,
    inputTextStyles,
    isOptional,
    label,
    labelStyle,
    multiline,
    onBlur,
    onChange,
    onFocus,
    placeholder,
    placeholderColor,
    secureTextEntry,
    showError,
    showEye,
    style,
    value,
    ...props
  },
  ref
) {
  const [showPassword, setShowPassword] = useState(false);
  const [isFocused, setIsFocused] = useState(false);

  const handleShowPassword = () => setShowPassword(prevShowPassword => !prevShowPassword);
  const handleFocus = useCallback(
    e => {
      setIsFocused(true);
      if (onFocus) onFocus(e);
    },
    [onFocus]
  );
  const handleBlur = useCallback(
    e => {
      setIsFocused(false);
      if (onBlur) onBlur(e);
    },
    [onBlur]
  );

  const borderColorStyle = () => {
    if (disabled) return styles.bottomBorderLightGray;
    if (isFocused) return styles.bottomBorderBlue;
    if (showError) return styles.bottomBorderRed;
    return {};
  };

  return (
    <View style={[styles.container, animated && !!label && styles.withAnimatedLabel, style]}>
      {label && (
        <InputLabel
          animated={animated}
          hasValue={!!value}
          isFocused={isFocused}
          isOptional={isOptional}
          label={label}
          labelStyle={labelStyle}
        />
      )}
      <View
        style={[
          multiline ? styles.multilineContainer : styles.inputContainer,
          borderColorStyle(),
          inputContainerStyle
        ]}>
        <TextInput
          {...props}
          ref={ref}
          autoCompleteType={secureTextEntry ? 'off' : autoCompleteType}
          editable={!disabled}
          multiline={multiline}
          onBlur={handleBlur}
          onFocus={handleFocus}
          onChangeText={onChange}
          placeholder={(isFocused || !animated) && value === '' ? placeholder : ''}
          placeholderTextColor={placeholderColor}
          secureTextEntry={secureTextEntry && !showPassword}
          style={[styles.inputStyle, !multiline && styles.singleInput, inputTextStyles]}
          value={value}
          testID={label || placeholder}
        />
        {secureTextEntry && showEye && (
          <ShowPassword onShowPassword={handleShowPassword} passwordVisible={showPassword} />
        )}
      </View>
      <View style={[!disabled && styles.errorContainer, errorContainerStyle]}>
        {!isFocused && error && (
          <CustomText error xsmall style={errorStyle}>
            {error}
          </CustomText>
        )}
      </View>
    </View>
  );
});

CustomTextInput.defaultProps = {
  allowFontScaling: false,
  animated: false,
  autoCapitalize: 'none',
  autoCompleteType: 'off',
  autoCorrect: false,
  clearButtonMode: 'never',
  disabled: false,
  keyboardType: 'default',
  multiline: false,
  placeholder: '',
  returnKeyType: 'done',
  underlineColorAndroid: transparent
};

const MyCustomTextInput = memo(CustomTextInput);

export default MyCustomTextInput;
