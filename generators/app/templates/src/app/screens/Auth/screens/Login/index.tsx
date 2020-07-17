import React, { useCallback } from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import i18next from 'i18next';
import { Formik } from 'formik';
import CustomButton from '@components/CustomButton';
import CustomText from '@components/CustomText';
import { CustomTextInputFormikField } from '@components/CustomTextInput';
import Routes from '@constants/routes';
import { Navigation } from '@interfaces/navigation';
import { State } from '@interfaces/reduxInterfaces';
import { actionCreators as AuthActions } from '@redux/auth/actions';
import { FIELDS, LOGIN_INITIAL_VALUES } from '@screens/Auth/constants';
import { validationsWrapper, validateRequired, validateEmail } from '@utils/validations/validateUtils';

import './i18n';
import styles from './styles';

function Login({ navigation }: Navigation) {
  const dispatch = useDispatch();
  const hasLoginError = useSelector<State, boolean>((state: State) => !!state.auth.currentUserError);
  const handleLogin: (values: any) => void = useCallback(values => dispatch(AuthActions.login(values)), [
    dispatch
  ]);
  const handleGoToSignUp = () => navigation.navigate(Routes.SignUp);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} style={styles.container}>
      <Formik onSubmit={handleLogin} initialValues={LOGIN_INITIAL_VALUES}>
        {({ handleSubmit, isValid }) => (
          <>
            <View style={styles.form}>
              <CustomTextInputFormikField
                animated
                keyboardType="email-address"
                label={i18next.t('LOGIN:MAIL')}
                name={FIELDS.email}
                placeholder={i18next.t('LOGIN:MAIL_PLACEHOLDER')}
                showError={hasLoginError}
                validate={validationsWrapper([validateRequired, validateEmail])}
              />
              <CustomTextInputFormikField
                animated
                showEye
                secureTextEntry
                label={i18next.t('LOGIN:PASSWORD')}
                name={FIELDS.password}
                showError={hasLoginError}
                validate={validateRequired}
              />
              {hasLoginError && (
                <CustomText error center>
                  {i18next.t('LOGIN:LOGIN_FAILURE')}
                </CustomText>
              )}
            </View>
            <CustomButton
              onPress={handleSubmit}
              style={styles.formButton}
              title={i18next.t('LOGIN:LOG_IN')}
              disabled={hasLoginError || !isValid}
            />
            <CustomButton
              onPress={handleGoToSignUp}
              style={styles.formButton}
              title={i18next.t('LOGIN:SIGN_UP')}
            />
          </>
        )}
      </Formik>
    </TouchableWithoutFeedback>
  );
}

export default Login;
