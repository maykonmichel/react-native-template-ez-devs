import React from 'react';
import { StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';

import Navigator from './src/navigation';
import { persistor, store } from './src/store';

export default () => (
  <View style={{ flex: 1 }}>
    <StatusBar backgroundColor="#FBD513" />
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <Navigator />
      </PersistGate>
    </Provider>
  </View>
);
