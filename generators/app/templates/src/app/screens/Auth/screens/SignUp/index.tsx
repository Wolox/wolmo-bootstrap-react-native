import React, { useCallback } from 'react';
import { Keyboard, TouchableWithoutFeedback, ScrollView } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import i18next from 'i18next';
import { Formik } from 'formik';
import CustomButton from '@components/CustomButton';
import CustomText from '@components/CustomText';
import { CustomTextInputFormikField } from '@components/CustomTextInput';
import { isIos } from '@constants/platform';
import { useAsyncRequest } from '@hooks/useRequest';
import { Navigation } from '@interfaces/navigation';
import { FIELDS, SIGNUP_INITIAL_VALUES } from '@screens/Auth/constants';
import * as AuthService from '@services/AuthService';
import {
  validationsWrapper,
  validateRequired,
  validateEmail,
  validateOnlyText,
  validateMinLength
} from '@utils/validations/validateUtils';

import './i18n';
import styles from './styles';

function SignUp({ navigation }: Navigation) {
  const [, , error, signUp] = useAsyncRequest({
    request: AuthService.signup,
    withPostSuccess: () => navigation.goBack()
  });
  const hasSignUpError = !!error;
  const handleSignUp = useCallback(
    values => {
      Keyboard.dismiss();
      signUp(values);
    },
    [signUp]
  );
  return (
    <Formik onSubmit={handleSignUp} initialValues={SIGNUP_INITIAL_VALUES}>
      {({ handleSubmit, isValid }) => (
        <>
          <ScrollView
            bounces={false}
            keyboardShouldPersistTaps="handled"
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.container}
            style={styles.stretchAndFlex}>
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={[styles.stretchAndFlex, styles.form]}>
              <>
                <CustomTextInputFormikField
                  animated
                  label={i18next.t('SIGNUP:NAME')}
                  name={FIELDS.name}
                  showError={hasSignUpError}
                  validate={validationsWrapper([validateRequired, validateOnlyText])}
                />
                <CustomTextInputFormikField
                  animated
                  label={i18next.t('SIGNUP:SURNAME')}
                  name={FIELDS.surname}
                  showError={hasSignUpError}
                  validate={validationsWrapper([validateRequired, validateOnlyText])}
                />
                <CustomTextInputFormikField
                  animated
                  label={i18next.t('SIGNUP:BIRTH_DATE')}
                  name={FIELDS.birthDate}
                  placeholder={i18next.t('SIGNUP:BIRTH_DATE_PLACEHOLDER')}
                  showError={hasSignUpError}
                  validate={validateRequired}
                />
                <CustomTextInputFormikField
                  animated
                  label={i18next.t('SIGNUP:SEX')}
                  name={FIELDS.sex}
                  placeholder={i18next.t('SIGNUP:SEX_PLACEHOLDER')}
                  showError={hasSignUpError}
                  validate={validationsWrapper([validateRequired, validateOnlyText])}
                />
                <CustomTextInputFormikField
                  animated
                  keyboardType="email-address"
                  label={i18next.t('SIGNUP:MAIL')}
                  name={FIELDS.email}
                  placeholder={i18next.t('SIGNUP:MAIL_PLACEHOLDER')}
                  showError={hasSignUpError}
                  validate={validationsWrapper([validateRequired, validateEmail])}
                />
                <CustomTextInputFormikField
                  animated
                  showEye
                  secureTextEntry
                  label={i18next.t('SIGNUP:PASSWORD')}
                  name={FIELDS.password}
                  showError={hasSignUpError}
                  validate={validationsWrapper([validateRequired, validateMinLength(8)])}
                />
                <CustomTextInputFormikField
                  animated
                  isOptional
                  keyboardType="phone-pad"
                  label={i18next.t('SIGNUP:PHONE_NUMBER')}
                  name={FIELDS.phoneNumber}
                  placeholder={i18next.t('SIGNUP:PHONE_NUMBER_PLACEHOLDER')}
                  showError={hasSignUpError}
                />
                {hasSignUpError && (
                  <CustomText error center>
                    {i18next.t('SIGNUP:SIGNUP_FAILURE')}
                  </CustomText>
                )}
                <CustomButton
                  onPress={handleSubmit}
                  style={styles.formButton}
                  title={i18next.t('SIGNUP:SIGN_UP')}
                  disabled={hasSignUpError || !isValid}
                />
              </>
            </TouchableWithoutFeedback>
          </ScrollView>
          {isIos && <KeyboardSpacer />}
        </>
      )}
    </Formik>
  );
}

export default SignUp;
