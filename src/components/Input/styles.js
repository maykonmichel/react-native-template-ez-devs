import { StyleSheet } from 'react-native';

import colors from '../../configs/colors';

export default StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 10,
    marginVertical: 5
  },
  animated: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    alignItems: 'center',
    borderColor: colors.light
  },
  iconContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginHorizontal: 10
  },
  input: {
    padding: 5,
    alignSelf: 'center',
    color: 'black',
    flex: 1
  },
  error: {
    margin: 5,
    color: colors.danger
  }
});
