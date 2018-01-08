import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Image } from 'react-native';

import icVisible from '../../assets/ic_visibility.png';
import icVisibleOff from '../../assets/ic_visibility_off.png';

import styles from './styles';

const ShowPassword = ({ onShowPassword, passwordVisible }) => (
  <TouchableOpacity onPress={onShowPassword} style={styles.container}>
    <Image source={passwordVisible ? icVisible : icVisibleOff} resizeMode="contain" style={styles.icon} />
  </TouchableOpacity>
);

ShowPassword.propTypes = {
  onShowPassword: PropTypes.func.isRequired,
  passwordVisible: PropTypes.bool.isRequired
};

export default ShowPassword;
