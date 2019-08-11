import React, { useMemo } from 'react';
import { StyleSheet, Text as RNText } from 'react-native';
import PropTypes from 'prop-types';

import typographies, { typographiesKeys } from '../configs/typographies';

const Text = ({ children, typography, style, ...attributes }) => {
  const typographyStyle = useMemo(() => typographies[typography], [typography]);

  return (
    <RNText style={StyleSheet.flatten([typographyStyle, style])} {...attributes}>
      {children}
    </RNText>
  );
};

Text.propTypes = {
  ...RNText.propTypes,
  style: RNText.propTypes.style,
  typography: PropTypes.oneOf(typographiesKeys)
};

Text.defaultProps = {
  style: {},
  typography: 'headline'
};

export default Text;
