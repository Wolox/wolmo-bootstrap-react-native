import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { transparent } from '../../../constants/colors';
import Loadable from '../../components/Loadable';
import CustomTextInput from '../../components/CustomTextInput';

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
      <TouchableOpacity onPress={onLogin} style={styles.formButton}>
        <Text>{strings.LOGIN_MESSAGE('Wolox')}</Text>
      </TouchableOpacity>
    </View>
  );
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired
};

export default Loadable(props => props.loading)(Login);
