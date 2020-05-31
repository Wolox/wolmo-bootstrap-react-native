import React, { useEffect, useRef } from 'react';
import { View, TextInput, Animated } from 'react-native';
import CustomText from '@components/CustomText';
import { gray, black } from '@constants/colors';

import ShowPassword from '../ShowPassword';
import { CustomTextInputProps } from '../../interface';

import {
  TOP_DEGRADE,
  LABEL_SIZE,
  LABEL_SIZE_DEGRADE,
  LEFT_DEGRADE,
  LEFT_SMALL_DEGRADE,
  ANIMATION_DURATION
} from './constants';
import styles from './styles';

const AnimatedTextInput = ({
  placeholderColor,
  multiline,
  borderColorStyle,
  style,
  textStyles,
  secureTextEntry,
  showEye,
  showPassword,
  label,
  labelStyle,
  placeholder,
  error,
  disabled,
  isFocused,
  onFocus,
  onBlur,
  onShowPassword,
  onChange,
  autoCompleteType,
  value,
  ...props
}: CustomTextInputProps) => {
  const animatedIsFocused = useRef(new Animated.Value(value ? 1 : 0)).current;
  useEffect(() => {
    const realValue = isFocused || value ? 1 : 0;
    Animated.timing(animatedIsFocused, {
      toValue: realValue,
      duration: ANIMATION_DURATION,
      useNativeDriver: false
    }).start();
  }, [animatedIsFocused, isFocused, value]);
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
  return (
    <View style={[(label && styles.containerWithLabel) as undefined | Record<string, any>, style]}>
      {label && (
        <Animated.Text allowFontScaling={false} style={[styles.label, animatedLabelStyle, labelStyle]}>
          {label}
        </Animated.Text>
      )}
      <View style={[!multiline && styles.inputContainer, borderColorStyle]}>
        <TextInput
          {...props}
          value={value}
          allowFontScaling={false}
          onChangeText={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
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
          <ShowPassword onShowPassword={onShowPassword!} passwordVisible={showPassword!} />
        )}
      </View>
      {!isFocused && error && (
        <CustomText error xsmall style={styles.errorMessage}>
          {error}
        </CustomText>
      )}
    </View>
  );
};

export default AnimatedTextInput;
