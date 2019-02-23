import { StyleSheet } from 'react-native';

import colors from '../colors';

export default StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    position: 'relative'
  },
  placeholderContainer: {
    ...StyleSheet.absoluteFill,
    alignItems: 'center',
    justifyContent: 'center'
  },
  placeholder: {
    backgroundColor: colors.light,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
