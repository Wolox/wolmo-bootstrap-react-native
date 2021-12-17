import React from 'react';
import { View, SafeAreaView } from 'react-native';
import { FallbackProps } from 'react-error-boundary';
import i18next from 'i18next';
import CustomText from '@components/CustomText';
import CustomButton from '@components/CustomButton';

import styles from './styles';
import './i18n';

/*
In this functional component we have two props by FallbackProps
error: String[], message with errorDetail
resetErrorBoundary: Function => this can reset the error
*/
export default function ErrorFallback({
  error,
  resetErrorBoundary
}: FallbackProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <CustomText big style={styles.title}>
          {i18next.t('ERRORBOUNDARY:TITLE')}
        </CustomText>
      </View>
      <View style={styles.content}>
        <CustomText style={styles.description}>
          {i18next.t('ERRORBOUNDARY:TRY_AGAIN')}
        </CustomText>
        <CustomButton
          style={styles.btn}
          textStyle={styles.btn_text}
          onPress={resetErrorBoundary}
          title={i18next.t('ERRORBOUNDARY:BACK_TO_HOME')}
        />
      </View>
    </SafeAreaView>
  );
}
