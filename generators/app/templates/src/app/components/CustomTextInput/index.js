import React, { PureComponent } from 'react';
import { Animated, View, TextInput, Text, TouchableWithoutFeedback } from 'react-native';
import PropTypes from 'prop-types';

import CustomText from '../CustomText';
import { transparent } from '../../../constants/colors';

import ShowPassword from './components/ShowPassword';
import styles from './styles';

// Known issue: showing/hiding the text with secureTextEntry changes the cursor position
// https://github.com/facebook/react-native/issues/5859

const FOCUSED_VALUE = 1;
const UNFOCUSED_VALUE = 0;

class CustomTextInput extends PureComponent {
  state = {
    showPassword: false,
    focused: false,
    value: this.props.value,
    focusedAnim: new Animated.Value(this.props.value ? FOCUSED_VALUE : UNFOCUSED_VALUE)
  };

  handleShowPassword = () => {
    this.setState(prevState => ({ showPassword: !prevState.showPassword }));
  };

  toggle = isActive => {
    const { animationDuration, easing } = this.props;
    Animated.timing(this.state.focusedAnim, {
      toValue: isActive ? 1 : 0,
      duration: animationDuration,
      easing,
      useNativeDriver: false
    }).start();
  };

  handleChange = value => {
    this.setState({ value });

    if (this.props.onChangeText) {
      this.props.onChangeText(value);
    }
  };

  handleBlur = event => {
    if (!this.state.value) {
      this.toggle(false);
    }
    this.setState({ focused: false });

    if (this.props.onBlur) {
      this.props.onBlur(event);
    }
  };

  handleFocus = event => {
    this.toggle(true);
    this.setState({ focused: true });

    if (this.props.onFocus) {
      this.props.onFocus(event);
    }
  };

  focus = () => {
    this.textInput.focus();
  };

  render() {
    const { focusedAnim, focused, value } = this.state;
    const { placeholderTextColor } = this.props;
    return (
      <View>
        {this.props.title &&
          !this.props.animated && (
            <CustomText
              gray
              small
              style={[styles.title, this.props.titleStyles, focused && this.props.titleFocusedStyles]}
            >
              {this.props.title}
            </CustomText>
          )}
        <View
          style={[
            this.props.multiline ? styles.multilineContainer : styles.container,
            this.props.bottomBorder && styles.bottomBorder,
            this.props.style,
            focused && this.props.focusedStyle
          ]}
        >
          {this.props.title &&
            this.props.animated && (
              <TouchableWithoutFeedback onPress={this.focus}>
                <Animated.View
                  style={{
                    position: 'absolute',
                    bottom: focusedAnim.interpolate({
                      inputRange: [UNFOCUSED_VALUE, FOCUSED_VALUE],
                      outputRange: [this.props.titleYUnfocused, this.props.titleYFocused]
                    })
                  }}
                >
                  <Animated.Text
                    style={[
                      styles.title,
                      this.props.titleStyles,
                      focused && this.props.titleFocusedStyles,
                      {
                        fontSize: focusedAnim.interpolate({
                          inputRange: [UNFOCUSED_VALUE, FOCUSED_VALUE],
                          outputRange: [this.props.titleSizeUnfocused, this.props.titleSizeFocused]
                        })
                      }
                    ]}
                  >
                    {this.props.title}
                  </Animated.Text>
                </Animated.View>
              </TouchableWithoutFeedback>
            )}
          <TextInput
            {...this.props}
            ref={textInput => (this.textInput = textInput)}
            allowFontScaling={false}
            onChangeText={this.handleChange}
            onBlur={this.handleBlur}
            onFocus={this.handleFocus}
            value={value}
            style={[
              styles.inputStyle,
              this.props.multiline ? styles.multilineInput : styles.singleInput,
              this.props.textStyles
            ]}
            placeholderTextColor={placeholderTextColor}
            secureTextEntry={this.props.secureTextEntry && !this.state.showPassword}
            autoComplete={!this.props.secureTextEntry}
          />
          {this.props.secureTextEntry &&
            this.props.showEye && (
              <ShowPassword
                onShowPassword={this.handleShowPassword}
                passwordVisible={this.state.showPassword}
              />
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
  maxHeight: 200,
  animationDuration: 300,
  animated: false,
  titleYUnfocused: 16,
  titleYFocused: 26,
  titleSizeUnfocused: 14,
  titleSizeFocused: 12
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
  titleFocusedStyles: Text.propTypes.style,
  textStyles: Text.propTypes.style,
  onBlur: PropTypes.func,
  onChangeText: PropTypes.func,
  onFocus: PropTypes.func,
  value: PropTypes.string,
  placeholderTextColor: PropTypes.string,
  showEye: PropTypes.bool,
  secureTextEntry: PropTypes.bool,
  title: PropTypes.string,
  easing: PropTypes.func,
  animationDuration: PropTypes.number,
  animated: PropTypes.bool,
  titleYUnfocused: PropTypes.number,
  titleYFocused: PropTypes.number,
  titleSizeUnfocused: PropTypes.number,
  titleSizeFocused: PropTypes.number,
  focusedStyle: View.propTypes.style
};

export default CustomTextInput;
