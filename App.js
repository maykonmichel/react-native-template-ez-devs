import React from 'react';
import { StatusBar, View, } from 'react-native';

import Navigator from './src/navigation';

export default () => (
  <View style={{ flex: 1 }}>
    <StatusBar backgroundColor="#FBD513" />
    <Navigator />
  </View>
);
