import React from 'react';
import { StyleSheet, View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import { keysIn } from 'lodash';

import styles from './styles';

const sizes = {
  small: 12,
  medium: 18,
  large: 26,
  extraLarge: 54
};

export default class Badge extends React.PureComponent {
  static propTypes = {
    size: PropTypes.oneOf(keysIn(sizes)),
    style: ViewPropTypes.style
  };

  static defaultProps = {
    size: 'medium',
    style: {}
  };

  render() {
    const { children, size: sizeName, style, ...attributes } = this.props;

    const size = sizes[sizeName];

    return (
      <View
        style={StyleSheet.flatten([
          styles.badge,
          { borderRadius: size / 2, height: size, minWidth: size },
          style
        ])}
        {...attributes}
      >
        {children}
      </View>
    );
  }
}
