import React from 'react';
import { View, TextInput } from 'react-native';
import CustomText from '@components/CustomText';

import ShowPassword from '../ShowPassword';
import { CustomTextInputProps } from '../../interface';

import styles from './styles';

const CustomTextInput = ({
  value,
  placeholderColor,
  borderColorStyle,
  label,
  labelStyle,
  multiline,
  onShowPassword,
  style,
  onChange,
  onBlur,
  onFocus,
  textStyles,
  secureTextEntry,
  showEye,
  showPassword,
  autoCompleteType,
  error,
  ...props
}: CustomTextInputProps) => {
  return (
    <>
      {label && (
        <CustomText gray small style={[styles.label, labelStyle]}>
          {label}
        </CustomText>
      )}
      <View style={[multiline ? styles.multilineContainer : styles.container, borderColorStyle, style]}>
        <TextInput
          {...props}
          allowFontScaling={false}
          onChangeText={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          value={value}
          style={[styles.inputStyle, multiline ? styles.multilineInput : styles.singleInput, textStyles]}
          placeholderTextColor={placeholderColor}
          secureTextEntry={secureTextEntry && !showPassword}
          autoCompleteType={secureTextEntry ? 'off' : autoCompleteType}
        />
        {secureTextEntry && showEye && (
          <ShowPassword onShowPassword={onShowPassword!} passwordVisible={showPassword!} />
        )}
      </View>
      {error && (
        <CustomText error xsmall style={styles.errorMessage}>
          {error}
        </CustomText>
      )}
    </>
  );
};

export default CustomTextInput;
