import { StyleSheet } from 'react-native';

import colors from '../colors';

export default StyleSheet.create({
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
    backgroundColor: colors.primary,
    padding: 8
  },
  disabled: {
    backgroundColor: colors.secondary
  },
  disabledTitle: {
    color: colors.light
  },
  light: {
    backgroundColor: 'transparent',
    elevation: 0
  },
  title: {
    textAlign: 'center',
    paddingTop: 2,
    paddingBottom: 1
  }
});
