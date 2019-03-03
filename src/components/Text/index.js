import React from 'react';
import { StyleSheet, Text as RNText } from 'react-native';
import PropTypes from 'prop-types';

import typographies, { typographiesKeys } from '../../configs/typographies';

Text.propTypes = {
  ...RNText.propTypes,
  style: RNText.propTypes.style,
  typography: PropTypes.oneOf(typographiesKeys)
};

Text.defaultProps = {
  style: {},
  typography: 'title1'
};

export default function Text({ color, children, typography, style, ...attributes }) {
  return (
    <RNText style={StyleSheet.flatten([typographies[typography], style])} {...attributes}>
      {children}
    </RNText>
  );
}
