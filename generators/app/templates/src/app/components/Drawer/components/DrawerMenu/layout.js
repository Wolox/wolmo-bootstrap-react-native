import React from 'react';
import { Text, TouchableWithoutFeedback, TouchableOpacity, View } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

export default function DrawerMenu({ wrapOnPress, onCloseDrawer }) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={wrapOnPress} style={styles.clickWrapper}>
        <TouchableOpacity onPress={onCloseDrawer} style={styles.closeButton}>
          <Text>Close drawer!</Text>
        </TouchableOpacity>
      </TouchableWithoutFeedback>
    </View>
  );
}

DrawerMenu.propTypes = {
  onCloseDrawer: PropTypes.func.isRequired,
  wrapOnPress: PropTypes.func.isRequired
};
