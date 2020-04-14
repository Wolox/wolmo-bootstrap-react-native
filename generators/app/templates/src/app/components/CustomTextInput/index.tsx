import React, { useState, useCallback, memo } from 'react';
import { View, TextInput } from 'react-native';
import CustomText from '@components/CustomText';
import { transparent } from '@constants/colors';

import ShowPassword from './components/ShowPassword';
import { CustomTextInputProps } from './interface';
import styles from './styles';

const CustomTextInput = (props: CustomTextInputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = useCallback(() => setShowPassword(prevShowPassword => !prevShowPassword), []);

  const {
    value,
    placeholderTextColor,
    title,
    titleStyles,
    multiline,
    bottomBorder,
    style,
    onChange,
    onBlur,
    onFocus,
    textStyles,
    secureTextEntry,
    showEye,
    autoCompleteType,
    error
  } = props;

  const placeholderColor = value ? transparent : placeholderTextColor;

  return (
    <>
      {title && (
        <CustomText gray small style={[styles.title, titleStyles]}>
          {title}
        </CustomText>
      )}
      <View
        style={[
          multiline ? styles.multilineContainer : styles.container,
          bottomBorder && styles.bottomBorder,
          style
        ]}>
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
          <ShowPassword onShowPassword={handleShowPassword} passwordVisible={showPassword} />
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

CustomTextInput.defaultProps = {
  autoCapitalize: 'sentences',
  autoCorrect: false,
  bottomBorder: false,
  clearButtonMode: 'never',
  keyboardType: 'default',
  maxHeight: 200,
  multiline: false,
  returnKeyType: 'done',
  underlineColorAndroid: transparent
};

export default memo(CustomTextInput);
