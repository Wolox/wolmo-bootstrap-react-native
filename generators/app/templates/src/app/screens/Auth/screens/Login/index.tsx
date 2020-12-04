import React from 'react';
import { Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import i18next from 'i18next';
import { useForm } from 'react-hook-form';
import CustomButton from '@components/CustomButton';
import CustomText from '@components/CustomText';
import ControlledCustomTextInput from '@components/CustomTextInput/controller';
import Routes from '@constants/routes';
import { Navigation } from '@interfaces/navigation';
import { State } from '@interfaces/reduxInterfaces';
import { actionCreators as AuthActions } from '@redux/auth/actions';
import { FIELDS } from '@screens/Auth/constants';
import { validateRequired, validateEmail } from '@utils/validations/validateUtils';
import { AuthData } from '@interfaces/authInterfaces';

import './i18n';
import styles from './styles';

function Login({ navigation }: Navigation) {
  const dispatch = useDispatch();
  const hasLoginError = useSelector<State, boolean>((state: State) => !!state.auth.currentUserError);

  const {
    handleSubmit,
    control,
    formState: { isValid },
    errors
  } = useForm<AuthData>();

  const handleLogin = (values: AuthData) => dispatch(AuthActions.login(values));

  const handleGoToSignUp = () => navigation.navigate(Routes.SignUp);
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <View style={styles.container}>
        <View style={styles.form}>
          <ControlledCustomTextInput
            control={control}
            animated
            keyboardType="email-address"
            label={i18next.t('LOGIN:MAIL')}
            name={FIELDS.email}
            placeholder={i18next.t('LOGIN:MAIL_PLACEHOLDER')}
            showError={hasLoginError}
            error={errors[FIELDS.email]?.message}
            rules={{ ...validateRequired, ...validateEmail }}
          />
          <ControlledCustomTextInput
            control={control}
            animated
            showEye
            secureTextEntry
            label={i18next.t('LOGIN:PASSWORD')}
            name={FIELDS.password}
            showError={hasLoginError}
            error={errors[FIELDS.password]?.message}
            rules={validateRequired}
          />
          {hasLoginError && (
            <CustomText error center>
              {i18next.t('LOGIN:LOGIN_FAILURE')}
            </CustomText>
          )}
        </View>
        <CustomButton
          onPress={handleSubmit(handleLogin)}
          style={styles.formButton}
          title={i18next.t('LOGIN:LOG_IN')}
          disabled={hasLoginError || !isValid}
        />
        <CustomButton
          onPress={handleGoToSignUp}
          style={styles.formButton}
          title={i18next.t('LOGIN:SIGN_UP')}
        />
      </View>
    </TouchableWithoutFeedback>
  );
}

export default Login;
