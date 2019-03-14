import React from 'react';
import { StyleSheet, Text as RNText } from 'react-native';
import PropTypes from 'prop-types';

import typographies, { typographiesKeys } from '../../configs/typographies';
import colors, { colorsKeys } from '../../configs/colors';

Text.propTypes = {
  ...RNText.propTypes,
  color: PropTypes.oneOf(colorsKeys),
  style: RNText.propTypes.style,
  typography: PropTypes.oneOf(typographiesKeys)
};

Text.defaultProps = {
  color: undefined,
  style: {},
  typography: 'title1'
};

export default function Text({ color, children, typography, style, ...attributes }) {
  return (
    <RNText
      style={StyleSheet.flatten([typographies[typography], { color: colors[color] }, style])}
      {...attributes}
    >
      {children}
    </RNText>
  );
}
