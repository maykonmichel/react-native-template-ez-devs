import { createStackNavigator } from 'react-navigation';

import Screen from '../screens/Screen';

export default createStackNavigator(
  {
    screen: { screen: Screen }
  },
  { headerMode: 'none' }
);
