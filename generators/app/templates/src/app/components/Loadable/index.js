import React from 'react';
import { View, ActivityIndicator } from 'react-native';

import { blue } from '../../../constants/colors';

import styles from './styles';

export const Loading = () => (
  <View style={styles.container}>
    <ActivityIndicator size="large" color={blue} />
  </View>
);

const LoadableWrapper = shouldLoad => WrappedComponent => {
  const Loadable = props => (shouldLoad(props) ? <Loading /> : <WrappedComponent {...props} />);
  return Loadable;
};

export default LoadableWrapper;
