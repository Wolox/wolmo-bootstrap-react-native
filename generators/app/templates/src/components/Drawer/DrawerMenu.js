import React from 'react';
import { Text, TouchableWithoutFeedback, TouchableOpacity, View } from 'react-native';

import styles from './DrawerMenu.styles';

export default function DrawerMenu({ wrapOnPress, onCloseDrawer }) {
  return (
    <View style={styles.container}>
      <TouchableWithoutFeedback onPress={wrapOnPress} style={styles.clickWrapper}>
        <TouchableOpacity onPress={onCloseDrawer} style={styles.closeButton}>
          <Text>
            Close drawer!
          </Text>
        </TouchableOpacity>
      </TouchableWithoutFeedback>
    </View>
  );
}

DrawerMenu.propTypes = {
  onCloseDrawer: React.PropTypes.func.isRequired,
  wrapOnPress: React.PropTypes.func.isRequired
};
