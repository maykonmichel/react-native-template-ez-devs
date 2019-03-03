import { Dimensions, Platform, StyleSheet } from 'react-native';

import colors from '../../configs/colors';

const { width } = Dimensions.get('window');

export default StyleSheet.create({
  body: {
    padding: 15
  },
  container: {
    backgroundColor: colors.shine,
    borderWidth: 1,
    margin: 15,
    marginBottom: 0,
    borderColor: colors.light,
    ...Platform.select({
      android: {
        elevation: 1
      },
      default: {
        shadowColor: 'rgba(0,0,0, .2)',
        shadowOffset: { height: 0, width: 0 },
        shadowOpacity: 1,
        shadowRadius: 1
      }
    })
  },
  image: {
    width: '100%',
    height: width * 0.6
  },
  titleContainer: {
    padding: 15,
    backgroundColor: colors.primary
  },
  title: {
    color: colors.shine,
    textAlign: 'center'
  }
});
