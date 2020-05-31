import React, { useCallback } from 'react';
import { Keyboard, TouchableOpacity, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import i18next from 'i18next';
import { Formik } from 'formik';
import CustomButton from '@components/CustomButton';
import CustomText from '@components/CustomText';
import { CustomTextInputField } from '@components/CustomTextInput';
import { State } from '@interfaces/reduxInterfaces';
import { actionCreators as AuthActions } from '@redux/auth/actions';
import { validationsWrapper, validateRequired, validateEmail } from '@utils/validations/validateUtils';

import { FIELDS, INITIAL_VALUES } from './constants';
import './i18n';
import styles from './styles';

const WITHOUT_OPACITY = 1;

function Login() {
  const dispatch = useDispatch();
  const hasLoginError = useSelector<State, boolean>(store => !!store.auth.currentUserError);
  const handleLogin: (values: any) => void = useCallback(values => dispatch(AuthActions.login(values)), [
    dispatch
  ]);
  return (
    <TouchableOpacity activeOpacity={WITHOUT_OPACITY} onPress={Keyboard.dismiss} style={styles.container}>
      <Formik onSubmit={handleLogin} initialValues={INITIAL_VALUES}>
        {({ handleSubmit, errors, touched }) => {
          const hasEmailError = !!errors[FIELDS.email] && touched[FIELDS.email];
          const hasPasswordError = !!errors[FIELDS.password] && touched[FIELDS.password];
          return (
            <>
              <View style={styles.form}>
                <CustomTextInputField
                  animated
                  keyboardType="email-address"
                  label={i18next.t('LOGIN:MAIL')}
                  name={FIELDS.email}
                  showError={hasLoginError}
                  validate={validationsWrapper([validateRequired, validateEmail])}
                />
                <CustomTextInputField
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
                disabled={hasLoginError || hasEmailError || hasPasswordError}
              />
            </>
          );
        }}
      </Formik>
    </TouchableOpacity>
  );
}

export default Login;
