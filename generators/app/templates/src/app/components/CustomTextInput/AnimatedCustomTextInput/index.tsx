import React, { useState, useCallback, useEffect, memo, useRef } from 'react';
import { View, TextInput, Animated } from 'react-native';
import CustomText from '@components/CustomText';
import { transparent, gray, black } from '@constants/colors';

import ShowPassword from '../components/ShowPassword';

import {
  TOP_DEGRADE,
  LABEL_SIZE,
  LABEL_SIZE_DEGRADE,
  LEFT_DEGRADE,
  LEFT_SMALL_DEGRADE,
  ANIMATION_DURATION
} from './constants';
import { AnimatedCustomTextInputProps } from './interface';
import styles from './styles';

/* If you want to integrate this component with some Form handler you will have to delete the handle of value's state and the handleChange function
You will also have to send the value and the onChange by props */
const AnimatedCustomTextInput = (props: AnimatedCustomTextInputProps) => {
  const {
    initialValue,
    placeholderTextColor,
    multiline,
    bottomBorder,
    style,
    textStyles,
    secureTextEntry,
    showEye,
    label,
    labelStyle,
    placeholder,
    error,
    disabled,
    onFocus,
    onBlur,
    onChange,
    autoCompleteType,
    ...rest
  } = props;
  const [showPassword, setShowPassword] = useState(false);
  const [value, setValue] = useState(initialValue);
  const [isFocused, setIsFocused] = useState(false);
  const animatedIsFocused = useRef(new Animated.Value(value ? 1 : 0)).current;
  useEffect(() => {
    const realValue = isFocused || value ? 1 : 0;
    Animated.timing(animatedIsFocused, {
      toValue: realValue,
      duration: ANIMATION_DURATION,
      useNativeDriver: false
    }).start();
  }, [animatedIsFocused, isFocused, value]);

  const handleShowPassword = useCallback(() => setShowPassword(prevShowPassword => !prevShowPassword), []);

  const handleChange = (text: string) => setValue(text);

  const handleFocus = useCallback(
    e => {
      setIsFocused(true);
      if (onFocus) onFocus(e);
    },
    [onFocus]
  );

  const animatedLabelStyle = {
    top: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [0, TOP_DEGRADE]
    }),
    left: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [LEFT_DEGRADE, LEFT_SMALL_DEGRADE]
    }),
    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [LABEL_SIZE, LABEL_SIZE_DEGRADE]
    }),
    color: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [gray, black]
    })
  };

  const handleBlur = useCallback(
    e => {
      setIsFocused(false);
      if (onBlur) onBlur(e);
    },
    [onBlur]
  );

  const placeholderColor = value ? transparent : placeholderTextColor;
  const borderColor = () => {
    if (disabled) return styles.bottomBorderLightGray;
    if (isFocused) return styles.bottomBorderBlue;
    if (error) return styles.bottomBorderRed;
    return styles.bottomBorderGray;
  };
  return (
    <View style={[(label && styles.containerWithLabel) as undefined | Record<string, any>, style]}>
      {label && (
        <Animated.Text allowFontScaling={false} style={[styles.label, animatedLabelStyle, labelStyle]}>
          {label}
        </Animated.Text>
      )}
      <View
        style={[
          !multiline && styles.inputContainer,
          bottomBorder && { ...borderColor(), ...styles.borderWidth }
        ]}>
        <TextInput
          {...rest}
          value={value}
          allowFontScaling={false}
          onChangeText={onChange || handleChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          style={[
            styles.inputStyle,
            !multiline && styles.singleInput,
            !multiline && styles.offset,
            textStyles
          ]}
          multiline={multiline}
          placeholderTextColor={placeholderColor}
          secureTextEntry={secureTextEntry && !showPassword}
          autoCompleteType={secureTextEntry ? 'off' : autoCompleteType}
          placeholder={isFocused && value === '' ? placeholder : ''}
          editable={!disabled}
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
    </View>
  );
};

AnimatedCustomTextInput.defaultProps = {
  initialValue: '',
  autoCapitalize: 'none',
  autoCompleteType: 'off',
  autoCorrect: false,
  bottomBorder: true,
  clearButtonMode: 'never',
  disabled: false,
  keyboardType: 'default',
  maxHeight: 200,
  multiline: false,
  placeholder: '',
  returnKeyType: 'done',
  underlineColorAndroid: transparent
};

export default memo(AnimatedCustomTextInput);
