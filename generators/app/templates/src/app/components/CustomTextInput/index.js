import React, { PureComponent } from 'react';
import { View, TextInput, Text } from 'react-native';
import PropTypes from 'prop-types';

import CustomText from '../CustomText';
import { transparent } from '../../../constants/colors';

import ShowPassword from './components/ShowPassword';
import styles from './styles';

// Known issue: showing/hiding the text with secureTextEntry changes the cursor position
// https://github.com/facebook/react-native/issues/5859

class CustomTextInput extends PureComponent {
  state = { showPassword: false };

  handleShowPassword = () => {
    this.setState(prevState => ({ showPassword: !prevState.showPassword }));
  };

  render() {
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
      autoComplete
    } = this.props;
    const { showPassword } = this.state;
    const placeholderColor = value ? transparent : placeholderTextColor;
    return (
      <View>
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
            {...this.props}
            allowFontScaling={false}
            onChangeText={onChange}
            onBlur={onBlur}
            onFocus={onFocus}
            value={value}
            style={[styles.inputStyle, multiline ? styles.multilineInput : styles.singleInput, textStyles]}
            placeholderTextColor={placeholderColor}
            secureTextEntry={secureTextEntry && !showPassword}
            autoComplete={secureTextEntry ? 'off' : autoComplete}
          />
          {secureTextEntry && showEye && (
            <ShowPassword onShowPassword={this.handleShowPassword} passwordVisible={showPassword} />
          )}
        </View>
      </View>
    );
  }
}

CustomTextInput.defaultProps = {
  placeholder: this.emptyString,
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
  autoComplete: PropTypes.string
};

export default CustomTextInput;
