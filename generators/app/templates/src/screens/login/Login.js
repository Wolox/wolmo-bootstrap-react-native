import React from 'react';
import { View, Text, TextInput, TouchableOpacity } from 'react-native';

import { green, blue, transparent } from '../../utils/colors';

export default function Login({ onLogin, loading }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <View style={{ backgroundColor: transparent, borderBottomColor: blue, borderBottomWidth: 1 }}>
        <TextInput
          placeholder={'Username'}
          style={{ padding: 5, backgroundColor: transparent, height: 24, width: 200 }}
        />
      </View>
      <View style={{ backgroundColor: transparent, borderBottomColor: blue, borderBottomWidth: 1 }}>
        <TextInput
          placeholder={'Password'}
          style={{ padding: 5, backgroundColor: transparent, height: 24, width: 200 }}
        />
      </View>
      <TouchableOpacity
        onPress={onLogin}
        style={{ backgroundColor: green, padding: 10, borderRadius: 3, margin: 20 }}
      >
        <Text>Login!</Text>
      </TouchableOpacity>
      {loading ? <Text>Loading...</Text> : null}
    </View>
  );
}

Login.propTypes = {
  loading: React.PropTypes.bool,
  onLogin: React.PropTypes.func.isRequired
};
