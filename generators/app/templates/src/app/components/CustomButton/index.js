import React, { useCallback, memo } from 'react';
import { TouchableOpacity, Image, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import { getCustomStyles } from '@utils/styleUtils';

import CustomText from '../CustomText';

import styles from './styles';

const VARIANTS = ['borderless', 'radial', 'black', 'green', 'white', 'gray'];

const CustomButton = props => {
  const customStyles = useCallback(() => getCustomStyles(VARIANTS, props, styles), [props]);

  const customTextStyles = useCallback(() => getCustomStyles(VARIANTS, props, styles, 'Content'), [props]);

  const { onPress, style, activeOpacity, icon, title, iconStyle, disabled, textStyle, ...textProps } = props;
  // TODO: Set android ripple while pressing a button
  return (
    <TouchableOpacity
      onPress={onPress}
      style={[styles.container, customStyles(), style]}
      activeOpacity={activeOpacity}
      disabled={disabled}>
      {icon && <Image source={icon} resizeMode="contain" style={[styles.icon, iconStyle]} />}
      {title && (
        <CustomText {...textProps} style={[customTextStyles(), textStyle]}>
          {title}
        </CustomText>
      )}
    </TouchableOpacity>
  );
};

CustomButton.defaultProps = {
  activeOpacity: 1
};

CustomButton.propTypes = {
  onPress: PropTypes.func.isRequired,
  activeOpacity: PropTypes.number,
  disabled: PropTypes.bool,
  icon: PropTypes.number,
  iconStyle: ViewPropTypes.style,
  style: ViewPropTypes.style,
  textStyle: PropTypes.number,
  title: PropTypes.string
};

export default memo(CustomButton);
