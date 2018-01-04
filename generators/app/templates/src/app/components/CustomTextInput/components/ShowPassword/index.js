import React from 'react';
import PropTypes from 'prop-types';
import { TouchableOpacity, Image } from 'react-native';

import icEyePng from '../../assets/ic_eye.png';
import icNoeyePng from '../../assets/ic_noeye.png';

import styles from './styles';

const ShowPassword = ({ onShowPassword, passwordVisible }) => (
  <TouchableOpacity onPress={onShowPassword} style={styles.container}>
    <Image source={passwordVisible ? icEyePng : icNoeyePng} resizeMode="contain" style={styles.icon} />
  </TouchableOpacity>
);

ShowPassword.propTypes = {
  onShowPassword: PropTypes.func.isRequired,
  passwordVisible: PropTypes.bool.isRequired
};

export default ShowPassword;
