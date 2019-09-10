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
        {secureTextEntry &&
          showEye && <ShowPassword onShowPassword={handleShowPassword} passwordVisible={showPassword} />}
      </View>
    </>
  );
};

CustomTextInput.defaultProps = {
  autoCorrect: false,
  autoCapitalize: 'sentences',
  clearButtonMode: 'never',
  returnKeyType: 'done',
  underlineColorAndroid: transparent,
  keyboardType: 'default',
  multiline: false,
  bottomBorder: false,
  maxHeight: 200
};

CustomTextInput.propTypes = {
  bottomBorder: PropTypes.bool,
  autoCapitalize: PropTypes.oneOf(['none', 'sentences', 'words', 'characters']),
  clearButtonMode: PropTypes.oneOf(['never', 'while-editing', 'unless-editing', 'always']),
  returnKeyType: PropTypes.oneOf(['done', 'go', 'next', 'search']),
  keyboardType: PropTypes.oneOf(['default', 'numeric', 'email-address', 'phone-pad']),
  underlineColorAndroid: PropTypes.string,
  maxHeight: PropTypes.number,
  autoCorrect: PropTypes.bool,
  multiline: PropTypes.bool,
  placeholder: PropTypes.string,
  titleStyles: Text.propTypes.style,
  textStyles: Text.propTypes.style,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  showEye: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
  title: PropTypes.string,
  autoCompleteType: PropTypes.string
};

export default memo(CustomTextInput);
