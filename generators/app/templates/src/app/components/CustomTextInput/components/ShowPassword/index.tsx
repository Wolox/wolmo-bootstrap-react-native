import React from 'react';
import { TouchableOpacity, Image } from 'react-native';

import icVisible from '../../assets/ic_visibility.png';
import icVisibleOff from '../../assets/ic_visibility_off.png';

import { ShowPasswordProps } from './interface';
import styles from './styles';

const ShowPassword = ({ onShowPassword, passwordVisible }: ShowPasswordProps) => (
  <TouchableOpacity onPress={onShowPassword} style={styles.container}>
    <Image source={passwordVisible ? icVisible : icVisibleOff} resizeMode="contain" style={styles.icon} />
  </TouchableOpacity>
);

export default ShowPassword;
