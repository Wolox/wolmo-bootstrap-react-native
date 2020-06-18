import React, { useEffect, useRef } from 'react';
import { Animated, TextStyle } from 'react-native';
import i18next from 'i18next';
import CustomText from '@components/CustomText';
import { gray, black } from '@constants/colors';

import {
  ANIMATION_DURATION,
  LABEL_SIZE,
  LABEL_SIZE_DEGRADE,
  LEFT_DEGRADE,
  LEFT_SMALL_DEGRADE,
  TOP_DEGRADE
} from './constants';
import './i18n';
import styles from './styles';

export interface Props {
  animated?: boolean;
  hasValue: boolean;
  isFocused: boolean;
  isOptional?: boolean;
  label: string;
  labelStyle?: TextStyle;
}

const InputLabel = ({ animated, hasValue, isFocused, isOptional, label, labelStyle }: Props) => {
  const animatedIsFocused = useRef(new Animated.Value(hasValue ? 1 : 0)).current;
  useEffect(() => {
    if (animated) {
      const realValue = isFocused || hasValue ? 1 : 0;
      Animated.timing(animatedIsFocused, {
        toValue: realValue,
        duration: ANIMATION_DURATION,
        useNativeDriver: false
      }).start();
    }
  }, [animated, animatedIsFocused, isFocused, hasValue]);
  const animatedLabelStyle = {
    top: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [0, TOP_DEGRADE]
    }),
    left: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [LEFT_DEGRADE, LEFT_SMALL_DEGRADE]
    }),
    fontSize: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [LABEL_SIZE, LABEL_SIZE_DEGRADE]
    }),
    color: animatedIsFocused.interpolate({
      inputRange: [0, 1],
      outputRange: [gray, black]
    })
  };
  const formattedLabel = `${label}${isOptional ? ` (${i18next.t('INPUT_LABEL:OPTIONAL')})` : ''}`;
  return animated ? (
    <Animated.Text
      allowFontScaling={false}
      style={[styles.label, styles.animatedlabel, animatedLabelStyle, labelStyle]}>
      {formattedLabel}
    </Animated.Text>
  ) : (
    <CustomText gray small style={[styles.label, labelStyle]}>
      {formattedLabel}
    </CustomText>
  );
};

export default InputLabel;
