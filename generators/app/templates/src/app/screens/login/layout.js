import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';

import { transparent } from '../../../constants/colors';
import Loadable from '../../components/Loadable';
import CustomTextInput from '../../components/CustomTextInput';
import CustomButton from '../../components/CustomButton';

import { strings } from './i18n';
import styles from './styles';

function Login({ onLogin }) {
  return (
    <View style={styles.container}>
      <View style={styles.formElementContainer}>
        <CustomTextInput
          underlineColorAndroid={transparent}
          placeholder={strings.USER()}
          style={styles.formElement}
        />
      </View>
      <View style={styles.formElementContainer}>
        <CustomTextInput
          underlineColorAndroid={transparent}
          placeholder={strings.PASSWORD()}
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
        title={strings.LOGIN_MESSAGE('Wolox')}
        activeOpacity={0.7}
      />
    </View>
  );
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired
};

export default Loadable(props => props.loading)(Login);
