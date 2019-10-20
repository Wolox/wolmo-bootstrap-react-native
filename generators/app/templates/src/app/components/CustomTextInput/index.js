import React, { useState, useCallback, memo } from 'react';
import { View, TextInput, Text } from 'react-native';
import PropTypes from 'prop-types';
import CustomText from '@components/CustomText';
import { transparent } from '@constants/colors';

import ShowPassword from './components/ShowPassword';
import styles from './styles';

const CustomTextInput = props => {
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
    autoCompleteType
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
        ]}
      >
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

CustomTextInput.propTypes = {
  autoCapitalize: PropTypes.oneOf(['none', 'sentences', 'words', 'characters']),
  autoComplete: PropTypes.string,
  autoCompleteType: PropTypes.string,
  autoCorrect: PropTypes.bool,
  bottomBorder: PropTypes.bool,
  clearButtonMode: PropTypes.oneOf(['never', 'while-editing', 'unless-editing', 'always']),
  keyboardType: PropTypes.oneOf(['default', 'numeric', 'email-address', 'phone-pad']),
  maxHeight: PropTypes.number,
  multiline: PropTypes.bool,
  placeholder: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  returnKeyType: PropTypes.oneOf(['done', 'go', 'next', 'search']),
  secureTextEntry: PropTypes.bool,
  showEye: PropTypes.bool,
  textStyles: Text.propTypes.style,
  title: PropTypes.string,
  titleStyles: Text.propTypes.style,
  underlineColorAndroid: PropTypes.string,
  value: PropTypes.string,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func
};

export default memo(CustomTextInput);
