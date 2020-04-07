import React from 'react';
import { View } from 'react-native';
import PropTypes from 'prop-types';
import CustomButton from '@components/CustomButton';

import { screensButtonInfo } from './buttonsInfo';
import styles from './styles';

export default function FirstScreen(props) {
  const buttonsInfo = screensButtonInfo(props);
  return (
    <View style={styles.buttons}>
      {buttonsInfo.firstButton && (
        <CustomButton {...buttonsInfo.firstButton} style={styles.buttonContainer} activeOpacity={0.7} />
      )}
      {buttonsInfo.secondButton && (
        <CustomButton {...buttonsInfo.secondButton} style={styles.buttonContainer} activeOpacity={0.7} />
      )}
    </View>
  );
}

FirstScreen.propTypes = {
  nextScreen: PropTypes.func.isRequired,
  previousScreen: PropTypes.func.isRequired,
  screenName: PropTypes.string.isRequired,
  skip: PropTypes.func.isRequired
};
