import React from 'react';
import { Image, StyleSheet, View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import Text from '../Text';

Component.propTypes = {
  containerAttributes: PropTypes.shape(ViewPropTypes),
  containerStyle: ViewPropTypes.style
};

Component.defaultProps = {
  containerAttributes: {},
  containerStyle: {}
};

export default function Component({
  containerAttributes,
  containerStyle
}) {
  return (
    <View style={StyleSheet.flatten([styles.container, containerStyle])} {...containerAttributes}>
    </View>
  );
}
