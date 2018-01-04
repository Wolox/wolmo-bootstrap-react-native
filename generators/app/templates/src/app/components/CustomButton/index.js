import React, { PureComponent } from 'react';
import { TouchableOpacity, Image, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import CustomText from '../CustomText';

import styles from './styles';

export default class CustomButton extends PureComponent {
  static VARIANTS = ['borderless', 'radial', 'black', 'green', 'small', 'white', 'gray'];

  customStyles = () =>
    CustomButton.VARIANTS.map(variant => (this.props[variant] ? styles[variant] : null)).filter(
      style => style !== null
    );

  customTextStyles = () =>
    CustomButton.VARIANTS.map(variant => (this.props[variant] ? styles[`${variant}Content`] : null)).filter(
      style => style !== null
    );

  render() {
    const {
      onPress,
      style,
      activeOpacity,
      icon,
      title,
      iconStyle,
      disabled,
      textStyle,
      ...textProps
    } = this.props;
    // TODO: Set android ripple while pressing a button
    return (
      <TouchableOpacity
        onPress={onPress}
        style={[styles.container, this.customStyles(), style]}
        activeOpacity={activeOpacity}
        disabled={disabled}
      >
        {icon && <Image source={icon} resizeMode="contain" style={[styles.icon, iconStyle]} />}
        {title && (
          <CustomText {...textProps} style={[styles.text, this.customTextStyles(), textStyle]}>
            {title}
          </CustomText>
        )}
      </TouchableOpacity>
    );
  }
}

CustomButton.defaultProps = {
  activeOpacity: 1
};

CustomButton.propTypes = {
  activeOpacity: PropTypes.number,
  disabled: PropTypes.bool,
  icon: PropTypes.number,
  iconStyle: ViewPropTypes.style, // eslint-disable-line react/no-typos
  onPress: PropTypes.func.isRequired,
  style: ViewPropTypes.style, // eslint-disable-line react/no-typos
  textStyle: PropTypes.number,
  title: PropTypes.string
};
