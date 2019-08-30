import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import i18next from 'i18next';
import { transparent } from '@constants/colors';
import Loadable from '@components/Loadable';
import CustomTextInput from '@components/CustomTextInput';
import CustomButton from '@components/CustomButton';

import styles from './styles';

export function Login({ onLogin }) {
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
      <CustomButton
        green
        onPress={onLogin}
        style={styles.formButton}
        title={i18next.t('LOGIN:LOGIN_MESSAGE', { name: 'Wolox' })}
        activeOpacity={0.7}
      />
    </View>
  );
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired
};

export default Loadable(props => props.loading)(Login);
