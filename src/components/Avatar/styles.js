import { StyleSheet } from 'react-native';

import colors from '../colors';

export default StyleSheet.create({
  container: {
    backgroundColor: colors.primary
  },
  avatar: {
    width: '100%',
    height: '100%'
  },
  badge: {
    position: 'absolute',
    right: -1,
    bottom: -1
  },
  title: {
    color: 'white',
    backgroundColor: 'transparent',
    textAlign: 'center'
  }
});
