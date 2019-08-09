import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import PropTypes from 'prop-types';
import CustomText from '@components/CustomText';

import styles from './styles';

function Page({ title, textProps, onPress, image }) {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.container, image && styles.imageContainer]}>
      {image && <Image source={image} style={styles.image} />}
      <CustomText {...textProps} style={styles.text}>
        {title}
      </CustomText>
    </TouchableOpacity>
  );
}

Page.propTypes = {
  title: PropTypes.string.isRequired,
  textProps: PropTypes.shape({ ...Text.propTypes }),
  onPress: PropTypes.func.isRequired,
  image: PropTypes.string
};

export default Page;
