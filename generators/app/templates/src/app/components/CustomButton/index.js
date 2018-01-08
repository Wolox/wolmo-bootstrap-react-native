import React, { PureComponent } from 'react';
import { TouchableOpacity, Image, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import CustomText from '../CustomText';
import { getCustomStyles } from '../../../utils/styleUtils';

import styles from './styles';

class CustomButton extends PureComponent {
  static VARIANTS = ['borderless', 'radial', 'black', 'green', 'white', 'gray'];

  customStyles = () => getCustomStyles(CustomButton.VARIANTS, this.props, styles);

  customTextStyles = () => getCustomStyles(CustomButton.VARIANTS, this.props, styles, 'Content');

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
  iconStyle: ViewPropTypes.style,
  onPress: PropTypes.func.isRequired,
  style: ViewPropTypes.style,
  textStyle: PropTypes.number,
  title: PropTypes.string
};

export default CustomButton;
