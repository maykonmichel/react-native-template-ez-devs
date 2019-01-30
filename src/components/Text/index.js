import React from 'react';
import { Text as RNText } from 'react-native';
import PropTypes from 'prop-types';

import colors from '../colors';
import typographies from '../typographies';

Text.propTypes = {
  ...RNText.propTypes,
  color: PropTypes.oneOf(colors),
  typography: PropTypes.oneOf(typographies)
};

Text.defaultProps = {
  color: colors.primary,
  typography: typographies.title1
};

export default function Text({ color, children, typography, ...attributes }) {
  return <RNText {...attributes}>{children}</RNText>;
}
