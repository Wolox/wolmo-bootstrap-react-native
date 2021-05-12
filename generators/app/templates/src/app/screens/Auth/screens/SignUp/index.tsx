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
import { FIELDS, SignupFormValues } from '@screens/Auth/constants';
import * as AuthService from '@services/AuthService';
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
    handleSubmit,
    control,
    formState: { isValid }
  } = useForm<SignupFormValues>({ mode: 'onBlur' });

  const hasSignUpError = !!error;
  const handleSignUp = (values: SignupFormValues) => {
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
              rules={{ ...validateRequired, ...validateOnlyText }}
            />
            <ControlledCustomTextInput
              control={control}
              animated
              label={i18next.t('SIGNUP:SURNAME')}
              name={FIELDS.surname}
              showError={hasSignUpError}
              rules={{ ...validateRequired, ...validateOnlyText }}
            />
            <ControlledCustomTextInput
              control={control}
              animated
              label={i18next.t('SIGNUP:BIRTH_DATE')}
              name={FIELDS.birthDate}
              placeholder={i18next.t('SIGNUP:BIRTH_DATE_PLACEHOLDER')}
              showError={hasSignUpError}
              rules={validateRequired}
            />
            <ControlledCustomTextInput
              control={control}
              animated
              label={i18next.t('SIGNUP:SEX')}
              name={FIELDS.sex}
              placeholder={i18next.t('SIGNUP:SEX_PLACEHOLDER')}
              showError={hasSignUpError}
              rules={{ ...validateRequired, ...validateOnlyText }}
            />
            <ControlledCustomTextInput
              control={control}
              animated
              keyboardType="email-address"
              label={i18next.t('SIGNUP:MAIL')}
              name={FIELDS.email}
              placeholder={i18next.t('SIGNUP:MAIL_PLACEHOLDER')}
              showError={hasSignUpError}
              rules={{ ...validateRequired, ...validateEmail }}
            />
            <ControlledCustomTextInput
              control={control}
              animated
              showEye
              secureTextEntry
              label={i18next.t('SIGNUP:PASSWORD')}
              name={FIELDS.password}
              showError={hasSignUpError}
              rules={{ ...validateRequired, ...validateMinLength(8) }}
            />
            <ControlledCustomTextInput
              control={control}
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
