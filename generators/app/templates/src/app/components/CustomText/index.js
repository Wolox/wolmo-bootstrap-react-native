import React, { useCallback, memo } from 'react';
import PropTypes from 'prop-types';
import { Text } from 'react-native';
import { getCustomStyles } from '@utils/styleUtils';

import styles from './styles';

/*
 ** You can add styles to Base like Family Font to be the Text styles base!
 ** if you want to add a custom style, you need to add it here and in VARIANTS
 */
const VARIANTS = [
  'semiBold',
  'bold',
  'italic',
  'center',
  'justify',
  'right',
  'blue',
  'gray',
  'green',
  'white',
  'xxsmall',
  'xsmall',
  'small',
  'medium',
  'xmedium',
  'big',
  'xbig'
];

const CustomText = props => {
  const customStyles = useCallback(() => getCustomStyles(VARIANTS, props, styles), [props]);

  const { textProps, style, children } = props;
  return (
    <Text {...textProps} style={[styles.base, customStyles(), style]}>
      {children}
    </Text>
  );
};

CustomText.defaultProps = {
  textProps: {}
};

CustomText.propTypes = {
  children: PropTypes.node.isRequired,
  textProps: PropTypes.shape({ ...Text.propTypes })
};

export default memo(CustomText);
