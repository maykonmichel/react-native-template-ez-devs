import { StyleSheet } from 'react-native';

import colors from '../colors';

export default StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    position: 'relative'
  },
  placeholderContainer: {
    ...StyleSheet.absoluteFillObject
  },
  placeholder: {
    backgroundColor: colors.light,
    alignItems: 'center',
    justifyContent: 'center'
  }
});
