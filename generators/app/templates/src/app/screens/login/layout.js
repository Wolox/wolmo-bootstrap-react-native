import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';
import PropTypes from 'prop-types';

import { transparent } from '../../../utils/colors';

import styles from './styles';

export default function Login({ onLogin }) {
  return (
    <View style={styles.container}>
      <View style={styles.formElementContainer}>
        <TextInput underlineColorAndroid={transparent} placeholder={'Username'} style={styles.formElement} />
      </View>
      <View style={styles.formElementContainer}>
        <TextInput underlineColorAndroid={transparent} placeholder={'Password'} style={styles.formElement} />
      </View>
      <TouchableOpacity onPress={onLogin} style={styles.formButton}>
        <Text>Login!</Text>
      </TouchableOpacity>
    </View>
  );
}

Login.propTypes = {
  onLogin: PropTypes.func.isRequired
};
