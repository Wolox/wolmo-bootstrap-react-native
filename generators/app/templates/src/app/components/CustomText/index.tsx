import React, { useCallback, memo } from 'react';
import { Text } from 'react-native';
import { getCustomStyles } from '@utils/styleUtils';

import { VARIANTS, CustomTextProps } from './constants';
import styles from './styles';

const CustomText = (props: CustomTextProps) => {
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

export default memo(CustomText);
