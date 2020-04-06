import React, { useState, useCallback, memo } from "react";
import { View, TextInput, Text } from "react-native";
import PropTypes from "prop-types";
import CustomText from "@components/CustomText";
import { transparent } from "@constants/colors";

import ShowPassword from "./components/ShowPassword";
import styles from "./styles";

export interface CustomTextInputProps extends TextInputProps, TextProps {
  bottomBorder?: boolean;
  multiline?: boolean;
  textStyles?: TextStyle;
  onBlur?: TextInputProps["onBlur"];
  onChange?(e: any): any;
  onFocus?: TextInputProps["onFocus"];
  value?: string;
  placeholderTextColor?: string;
  showEye?: boolean;
  secureTextEntry?: boolean;
  style?: ViewProps["style"];
  autoCompleteType?: TextInputProps["autoCompleteType"];
  title?: string;
  titleStyles?: TextStyle;
}

const CustomTextInput = (props): CustomTextInputProps => {
  const [showPassword, setShowPassword] = useState(false);

  const handleShowPassword = useCallback(
    () => setShowPassword((prevShowPassword) => !prevShowPassword),
    []
  );

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
          style,
        ]}
      >
        <TextInput
          {...props}
          allowFontScaling={false}
          onChangeText={onChange}
          onBlur={onBlur}
          onFocus={onFocus}
          value={value}
          style={[
            styles.inputStyle,
            multiline ? styles.multilineInput : styles.singleInput,
            textStyles,
          ]}
          placeholderTextColor={placeholderColor}
          secureTextEntry={secureTextEntry && !showPassword}
          autoCompleteType={secureTextEntry ? "off" : autoCompleteType}
        />
        {secureTextEntry && showEye && (
          <ShowPassword
            onShowPassword={handleShowPassword}
            passwordVisible={showPassword}
          />
        )}
      </View>
    </>
  );
};

CustomTextInput.defaultProps = {
  autoCapitalize: "sentences",
  autoCorrect: false,
  bottomBorder: false,
  clearButtonMode: "never",
  keyboardType: "default",
  maxHeight: 200,
  multiline: false,
  returnKeyType: "done",
  underlineColorAndroid: transparent,
};

export default memo(CustomTextInput);
