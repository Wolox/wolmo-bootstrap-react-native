import React, { PureComponent } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';

import styles from './styles';

class CustomText extends PureComponent {
  /*
  ** You can add styles to Base like Family Font to be the Text styles base!
  ** if you want to add a custom style, you need to add it here and in VARIANTS
  */
  static VARIANTS = [
    'xxsmall',
    'xsmall',
    'small',
    'medium',
    'big',
    'xbig',
    'bold',
    'center',
    'white',
    'blue',
    'green',
    'gray'
  ];

  customStyles = () =>
    CustomText.VARIANTS.map(variant => (this.props[variant] ? styles[variant] : null)).filter(
      style => style !== null
    );

  render() {
    return (
      <Text {...this.props.textProps} style={[styles.base, this.customStyles(), this.props.style]}>
        {this.props.children}
      </Text>
    );
  }
}

CustomText.defaultProps = {
  textProps: {}
};

CustomText.propTypes = {
  children: PropTypes.node.isRequired,
  textProps: PropTypes.shape({ ...Text.propTypes })
};

CustomText.VARIANTS.forEach(variant => {
  CustomText.propTypes[variant] = PropTypes.bool;
});

export default CustomText;
