import React, { useState, useCallback, useEffect, memo, useRef } from "react";
import {
  View,
  TextInput,
  Animated,
  TextInputProps,
  TextProps,
} from "react-native";
import CustomText from "@components/CustomText";
import { transparent, gray, black } from "@constants/colors";

import ShowPassword from "../components/ShowPassword";

import {
  TOP_DEGRADE,
  LABEL_SIZE,
  LABEL_SIZE_DEGRADE,
  LEFT_DEGRADE,
  LEFT_SMALL_DEGRADE,
} from "./constants";
import { AnimatedCustomTextInputProps } from "./interface";
import styles from "./styles";

const AnimatedCustomTextInput = (props: AnimatedCustomTextInputProps) => {
  const {
    value,
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
  const [isFocused, setIsFocused] = useState(false);
  const animatedIsFocused = useRef(new Animated.Value(value ? 1 : 0)).current;
  useEffect(() => {
    const realValue = isFocused || value ? 1 : 0;
    Animated.timing(animatedIsFocused, {
      toValue: realValue,
      duration: 200,
    }).start();
  }, [animatedIsFocused, isFocused, value]);

  const handleShowPassword = useCallback(
    () => setShowPassword((prevShowPassword) => !prevShowPassword),
    []
  );

  const handleFocus = useCallback(
    (e) => {
      setIsFocused(true);
      if (onFocus) onFocus(e);
    },
    [onFocus]
  );

  const animatedLabelStyle = {
    top: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [0, TOP_DEGRADE],
    }),
    left: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [LEFT_DEGRADE, LEFT_SMALL_DEGRADE],
    }),
    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [LABEL_SIZE, LABEL_SIZE_DEGRADE],
    }),
    color: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [gray, black],
    }),
  };

  const handleBlur = useCallback(
    (e) => {
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
    <View
      style={[
        (label && styles.containerWithLabel) as undefined | Record<string, any>,
        style,
      ]}
    >
      {label && (
        <Animated.Text
          allowFontScaling={false}
          style={[styles.label, animatedLabelStyle, labelStyle]}
        >
          {label}
        </Animated.Text>
      )}
      <View
        style={[
          !multiline && styles.inputContainer,
          bottomBorder && { ...borderColor(), ...styles.borderWidth },
        ]}
      >
        <TextInput
          {...rest}
          value={value}
          allowFontScaling={false}
          onChangeText={onChange}
          onBlur={handleBlur}
          onFocus={handleFocus}
          style={[
            styles.inputStyle,
            !multiline && styles.singleInput,
            !multiline && styles.offset,
            textStyles,
          ]}
          multiline={multiline}
          placeholderTextColor={placeholderColor}
          secureTextEntry={secureTextEntry && !showPassword}
          autoCompleteType={secureTextEntry ? "off" : autoCompleteType}
          placeholder={isFocused && value === "" ? placeholder : ""}
          editable={!disabled}
        />
        {secureTextEntry && showEye && (
          <ShowPassword
            onShowPassword={handleShowPassword}
            passwordVisible={showPassword}
          />
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
  autoCapitalize: "none",
  autoCompleteType: "off",
  autoCorrect: false,
  bottomBorder: true,
  clearButtonMode: "never",
  disabled: false,
  keyboardType: "default",
  maxHeight: 200,
  multiline: false,
  placeholder: "",
  returnKeyType: "done",
  underlineColorAndroid: transparent,
};

export default memo(AnimatedCustomTextInput);