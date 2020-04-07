import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import CustomText from '@components/CustomText';
import i18next from 'i18next';

import styles from './styles';

export default function ThirdScreen({ previousScreen, skip }) {
  return (
    <View style={styles.container}>
      <CustomText>{i18next.t('ONBOARDING:THIRD_SCREEN')}</CustomText>
    </View>
  );
}

ThirdScreen.propTypes = {
  previousScreen: PropTypes.func.isRequired,
  skip: PropTypes.func.isRequired
};
