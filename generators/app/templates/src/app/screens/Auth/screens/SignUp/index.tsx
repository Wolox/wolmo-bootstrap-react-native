import React from 'react';
import { Keyboard, TouchableWithoutFeedback, ScrollView, View } from 'react-native';
import KeyboardSpacer from 'react-native-keyboard-spacer';
import i18next from 'i18next';
import { useForm } from 'react-hook-form';
import CustomButton from '@components/CustomButton';
import CustomText from '@components/CustomText';
import ControlledCustomTextInput from '@components/CustomTextInput/controller';
import { isIos } from '@constants/platform';
import { useAsyncRequest } from '@hooks/useRequest';
import { Navigation } from '@interfaces/navigation';
import { FIELDS } from '@screens/Auth/constants';
import * as AuthService from '@services/AuthService';
import { SignUpData } from '@interfaces/authInterfaces';
import {
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

  const {
    control,
    errors,
    formState: { isValid },
    handleSubmit
  } = useForm<SignUpData>();

  const hasSignUpError = !!error;
  const handleSignUp = (values: SignUpData) => {
    Keyboard.dismiss();
    signUp(values);
  };

  return (
    <>
      <ScrollView
        bounces={false}
        keyboardShouldPersistTaps="handled"
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
        style={styles.stretchAndFlex}>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View style={[styles.stretchAndFlex, styles.form]}>
            <ControlledCustomTextInput
              control={control}
              animated
              label={i18next.t('SIGNUP:NAME')}
              name={FIELDS.name}
              showError={hasSignUpError}
              error={errors[FIELDS.name]?.message}
              rules={{ ...validateRequired, ...validateOnlyText }}
            />
            <ControlledCustomTextInput
              animated
              label={i18next.t('SIGNUP:SURNAME')}
              name={FIELDS.surname}
              showError={hasSignUpError}
              error={errors[FIELDS.surname]?.message}
              rules={{ ...validateRequired, ...validateOnlyText }}
            />
            <ControlledCustomTextInput
              animated
              label={i18next.t('SIGNUP:BIRTH_DATE')}
              name={FIELDS.birthDate}
              placeholder={i18next.t('SIGNUP:BIRTH_DATE_PLACEHOLDER')}
              showError={hasSignUpError}
              error={errors[FIELDS.birthDate]?.message}
              validate={validateRequired}
            />
            <ControlledCustomTextInput
              animated
              label={i18next.t('SIGNUP:SEX')}
              name={FIELDS.sex}
              placeholder={i18next.t('SIGNUP:SEX_PLACEHOLDER')}
              showError={hasSignUpError}
              error={errors[FIELDS.sex]?.message}
              rules={{ ...validateRequired, ...validateOnlyText }}
            />
            <ControlledCustomTextInput
              animated
              keyboardType="email-address"
              label={i18next.t('SIGNUP:MAIL')}
              name={FIELDS.email}
              placeholder={i18next.t('SIGNUP:MAIL_PLACEHOLDER')}
              showError={hasSignUpError}
              error={errors[FIELDS.email]?.message}
              rules={{ ...validateRequired, ...validateEmail }}
            />
            <ControlledCustomTextInput
              animated
              showEye
              secureTextEntry
              label={i18next.t('SIGNUP:PASSWORD')}
              name={FIELDS.password}
              showError={hasSignUpError}
              error={errors[FIELDS.password]?.message}
              rules={{ ...validateRequired, ...validateMinLength(8) }}
            />
            <ControlledCustomTextInput
              animated
              isOptional
              keyboardType="phone-pad"
              label={i18next.t('SIGNUP:PHONE_NUMBER')}
              name={FIELDS.phoneNumber}
              placeholder={i18next.t('SIGNUP:PHONE_NUMBER_PLACEHOLDER')}
              error={errors[FIELDS.phoneNumber]?.message}
              showError={hasSignUpError}
            />
            {hasSignUpError && (
              <CustomText error center>
                {i18next.t('SIGNUP:SIGNUP_FAILURE')}
              </CustomText>
            )}
            <CustomButton
              onPress={handleSubmit(handleSignUp)}
              style={styles.formButton}
              title={i18next.t('SIGNUP:SIGN_UP')}
              disabled={hasSignUpError || !isValid}
            />
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
      {isIos && <KeyboardSpacer />}
    </>
  );
}

export default SignUp;
