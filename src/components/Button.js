import React, { useMemo } from 'react';
import { ActivityIndicator, Platform, StyleSheet, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import { toUpper } from 'lodash';

import colors from '../configs/colors';
import Icon from './Icon';
import Text from './Text';
import TouchableView from './TouchableView';

const Button = ({ disabled, icon, loading, style, title, titleAttributes, ...attributes }) => {
  const normalizedTitle = useMemo(() => (Platform.OS === 'android' ? toUpper(title) : title), []);

  return (
    <TouchableView
      activeOpacity={0.8}
      disabled={disabled}
      style={StyleSheet.flatten([styles.container, style, disabled && styles.disabledContainer])}
      {...attributes}
    >
      <If condition={loading}>
        <ActivityIndicator animating color="white" />
      </If>
      <If condition={icon}>
        <Icon name={icon} size={20} color={disabled ? colors.light : '#fff'} />
      </If>
      <Text
        style={StyleSheet.flatten([styles.title, disabled && styles.disabledTitle])}
        {...titleAttributes}
      >
        {normalizedTitle}
      </Text>
    </TouchableView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.primary,
    marginTop: 10,
    marginBottom: 30,
    paddingVertical: 8,
    paddingHorizontal: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 5
    },
    shadowOpacity: 0.34,
    shadowRadius: 6.27,

    elevation: 10
  },
  disabledContainer: {
    backgroundColor: colors.secondary
  },
  title: {
    color: '#fff',
    textAlign: 'center'
  },
  disabledTitle: {
    color: colors.shine
  }
});

Button.propTypes = {
  disabled: PropTypes.bool,
  icon: PropTypes.string,
  loading: PropTypes.bool,
  style: ViewPropTypes.style,
  title: PropTypes.string,
  titleAttributes: PropTypes.shape(Text.propTypes)
};

Button.defaultProps = {
  disabled: false,
  icon: undefined,
  loading: false,
  style: {},
  title: '',
  titleAttributes: {}
};

export default React.memo(Button);
