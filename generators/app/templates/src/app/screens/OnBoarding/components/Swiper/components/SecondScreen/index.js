import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import CustomText from '@components/CustomText';
import i18next from 'i18next';

import styles from './styles';

export default function SecondScreen({ nextScreen, previousScreen }) {
  return (
    <View style={styles.container}>
      <CustomText>{i18next.t('ONBOARDING:SECOND_SCREEN')}</CustomText>
    </View>
  );
}

SecondScreen.propTypes = {
  nextScreen: PropTypes.func.isRequired,
  previousScreen: PropTypes.func.isRequired
};
