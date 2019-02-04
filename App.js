import React from 'react';
import { StatusBar, View } from 'react-native';
import { Provider } from 'react-redux';
import { PersistGate } from 'redux-persist/integration/react';
import SplashScreen from 'react-native-splash-screen';

import Navigator from './src/navigation';
import { persistor, store } from './src/store';
import colors from './src/components/colors';

export default class App extends React.Component {
  componentDidMount() {
    SplashScreen.hide();
  }

  render() {
    return (
      <View style={{ flex: 1 }}>
        <StatusBar backgroundColor={colors.primary} />
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            <Navigator />
          </PersistGate>
        </Provider>
      </View>
    );
  }
}
