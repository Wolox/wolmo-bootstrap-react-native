import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-navigation';
import CustomText from '@components/CustomText';
import CustomButton from '@components/CustomButton';
import i18next from 'i18next';

import styles from './styles';

export default function SecondScreen({ nextScreen, previousScreen }) {
  return (
    <SafeAreaView style={styles.container}>
      <CustomText>{i18next.t('ONBOARDING:SECOND_SCREEN')}</CustomText>
      <View style={styles.buttons}>
        <CustomButton
          title={i18next.t('ONBOARDING:PREVIOUS')}
          onPress={previousScreen}
          style={styles.buttonContainer}
          activeOpacity={0.7}
        />
        <CustomButton
          title={i18next.t('ONBOARDING:NEXT')}
          onPress={nextScreen}
          style={styles.buttonContainer}
          activeOpacity={0.7}
        />
      </View>
    </SafeAreaView>
  );
}

SecondScreen.propTypes = {
  nextScreen: PropTypes.func.isRequired,
  previousScreen: PropTypes.func.isRequired
};
