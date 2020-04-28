import React, { useCallback, memo } from 'react';
import { View } from 'react-native';
import { useSelector, useDispatch } from 'react-redux';
import i18next from 'i18next';
import CustomButton from '@components/CustomButton';
import CustomTextInput from '@components/CustomTextInput';
import { Loading } from '@components/Loadable';
import { transparent } from '@constants/colors';
import { State } from '@interfaces/reduxInterfaces';
import { actionCreators as authActions } from '@redux/auth/actions';

import './i18n';
import styles from './styles';

const Login = () => {
  const dispatch = useDispatch();
  const loading = useSelector<State, boolean>(state => state.auth.currentUserLoading);
  const handleLogin = useCallback(() => dispatch(authActions.login()), [dispatch]);
  return (
    <View style={styles.container}>
      <View style={styles.formElementContainer}>
        <CustomTextInput
          underlineColorAndroid={transparent}
          placeholder={i18next.t('LOGIN:USER')}
          style={styles.formElement}
        />
      </View>
      <View style={styles.formElementContainer}>
        <CustomTextInput
          underlineColorAndroid={transparent}
          placeholder={i18next.t('LOGIN:PASSWORD')}
          style={styles.formElement}
          secureTextEntry
          autoCapitalize="none"
          showEye
        />
      </View>
      {loading ? (
        <Loading />
      ) : (
        <CustomButton
          green
          onPress={handleLogin}
          style={styles.formButton}
          title={i18next.t('LOGIN:LOGIN_MESSAGE', { name: 'Wolox' })}
          activeOpacity={0.7}
        />
      )}
    </View>
  );
};

export default memo(Login);
