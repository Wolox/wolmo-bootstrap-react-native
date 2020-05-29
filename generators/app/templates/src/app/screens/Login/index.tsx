import React, { useCallback } from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import i18next from 'i18next';
import { Formik } from 'formik';
import CustomButton from '@components/CustomButton';
import CustomText from '@components/CustomText';
import { CustomTextInputField } from '@components/CustomTextInput';
import withLoadable from '@components/Loadable';
import { State } from '@interfaces/reduxInterfaces';
import { actionCreators as AuthActions } from '@redux/auth/actions';
import { validationsWrapper, validateRequired, validateEmail } from '@utils/validations/validateUtils';

import { FIELDS, INITIAL_VALUES } from './constants';
import './i18n';
import styles from './styles';

const loadingSelector = (state: State) => state.auth.currentUserLoading;

function Login() {
  const dispatch = useDispatch();
  const hasLoginError = useSelector<State, string | null>(store => store.auth.currentUserError);
  const handleLogin: (values: any) => void = useCallback(values => dispatch(AuthActions.login(values)), [
    dispatch
  ]);
  return (
    <Formik onSubmit={handleLogin} initialValues={INITIAL_VALUES}>
      {({ handleSubmit, errors, touched }) => {
        const emailError = (errors.email && touched.email) as boolean;
        const passwordError = (errors.password && touched.password) as boolean;
        return (
          <View style={styles.container}>
            <View style={styles.form}>
              <CustomTextInputField
                label={i18next.t('LOGIN:MAIL')}
                name={FIELDS.email}
                error={!!hasLoginError || emailError}
                keyboardType="email-address"
                validate={validationsWrapper([validateRequired, validateEmail])}
              />
              <CustomTextInputField
                showEye
                secureTextEntry
                label={i18next.t('LOGIN:PASSWORD')}
                name={FIELDS.password}
                error={!!hasLoginError || passwordError}
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
              disabled={!!hasLoginError || emailError || passwordError}
            />
          </View>
        );
      }}
    </Formik>
  );
}

export default withLoadable(() => useSelector(loadingSelector))(Login);
