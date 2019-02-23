import React from 'react';
import { StyleSheet, View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import Text from '../Text';

export default class Component extends React.PureComponent {
  static propTypes = {
    containerAttributes: PropTypes.shape(ViewPropTypes),
    containerStyle: ViewPropTypes.style
  };

  static defaultProps = {
    containerAttributes: {},
    containerStyle: {}
  };

  render() {
    const { containerAttributes, containerStyle } = this.props;
    return (
      <View style={StyleSheet.flatten([styles.container, containerStyle])} {...containerAttributes}>
        <Text>Component</Text>
      </View>
    );
  }
}
