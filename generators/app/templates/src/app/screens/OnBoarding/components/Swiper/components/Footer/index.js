import React from 'react';
import { View } from 'react-native';
import CustomButton from '@components/CustomButton';

import { screensButtonInfo } from './buttonsInfo';
import styles from './styles';

export default function Footer(props) {
  const { firstButton, secondButton } = screensButtonInfo(props);
  return (
    <View style={styles.buttons}>
      {firstButton && <CustomButton {...firstButton} style={styles.buttonContainer} activeOpacity={0.7} />}
      {secondButton && <CustomButton {...secondButton} style={styles.buttonContainer} activeOpacity={0.7} />}
    </View>
  );
}
