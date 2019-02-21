import { Platform, StyleSheet } from 'react-native';

import colors from '../colors';

export default StyleSheet.create({
  container: {
    backgroundColor: 'transparent'
  },

  avatar: {
    flex: 1,
    width: null,
    height: null
  },
  overlayContainer: {
    flex: 1,
    backgroundColor: '#bdbdbd'
  },
  title: {
    color: '#ffffff',
    backgroundColor: 'transparent',
    textAlign: 'center'
  },
  editButton: {
    position: 'absolute',
    bottom: 0,
    right: 0,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#aaa',
    ...Platform.select({
      android: {
        elevation: 1
      },
      default: {
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowRadius: 2,
        shadowOpacity: 0.5
      }
    })
  }
});
