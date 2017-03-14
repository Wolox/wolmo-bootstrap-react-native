import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';

import { green } from '../../utils/colors';

export default function Logout({ onLogout }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={onLogout} style={{ backgroundColor: green, padding: 10, borderRadius: 3 }}>
        <Text>Logout!</Text>
      </TouchableOpacity>
    </View>
  );
}

Logout.propTypes = {
  onLogout: React.PropTypes.func.isRequired
};
