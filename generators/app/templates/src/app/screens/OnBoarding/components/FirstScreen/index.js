import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import { SafeAreaView } from 'react-navigation';
import CustomText from '@components/CustomText';
import CustomButton from '@components/CustomButton';
import i18next from 'i18next';

import styles from './styles';

export default function FirstScreen({ nextScreen, skip }) {
  return (
    <SafeAreaView style={styles.container}>
      <CustomText>{i18next.t('ONBOARDING:FIRST_SCREEN')}</CustomText>
      <View style={styles.buttons}>
        <CustomButton
          title={i18next.t('ONBOARDING:SKIP')}
          onPress={skip}
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

FirstScreen.propTypes = {
  nextScreen: PropTypes.func.isRequired,
  skip: PropTypes.func.isRequired
};
