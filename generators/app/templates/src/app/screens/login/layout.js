import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { transparent } from '../../../constants/colors';

import { strings } from './i18n';
import styles from './styles';

export default function Login({ onLogin }) {
  return (
    <View style={styles.container}>
      <View style={styles.formElementContainer}>
        <TextInput
          underlineColorAndroid={transparent}
          placeholder={strings.USER()}
          style={styles.formElement}
        />
      </View>
      <View style={styles.formElementContainer}>
        <TextInput
          underlineColorAndroid={transparent}
          placeholder={strings.PASSWORD()}
          style={styles.formElement}
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
