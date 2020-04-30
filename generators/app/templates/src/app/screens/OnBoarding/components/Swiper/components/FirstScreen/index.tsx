import React from 'react';
import { View } from 'react-native';
import i18next from 'i18next';
import CustomText from '@components/CustomText';

import styles from './styles';

function FirstScreen() {
  return (
    <View style={styles.container}>
      <CustomText>{i18next.t('ONBOARDING:FIRST_SCREEN')}</CustomText>
    </View>
  );
}

export default FirstScreen;
