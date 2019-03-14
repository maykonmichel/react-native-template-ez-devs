import { StyleSheet } from 'react-native';

import colors from '../../configs/colors';

export default StyleSheet.create({
  button: {
    flexDirection: 'row',
    width: '80%',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 8,
    borderRadius: 3,
    backgroundColor: colors.primary
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
  loading: {
    marginRight: 15
  },
  title: {
    textAlign: 'center',
    paddingTop: 2,
    paddingBottom: 1
  }
});
