import React from 'react';
import {
  ActivityIndicator,
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  View,
  ViewPropTypes
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import Text from '../Text';

Button.propTypes = {
  disabled: PropTypes.bool,
  disabledStyle: ViewPropTypes.style,
  disabledTitleStyle: PropTypes.shape(Text.propTypes),
  leftComponent: PropTypes.element,
  light: PropTypes.bool,
  loading: PropTypes.bool,
  loadingProps: PropTypes.shape(ActivityIndicator.propTypes),
  rightComponent: PropTypes.element,
  style: ViewPropTypes.style,
  title: PropTypes.string,
  titleStyle: PropTypes.shape(Text.propTypes)
};

Button.defaultProps = {
  disabled: false,
  disabledStyle: {},
  disabledTitleStyle: {},
  leftComponent: null,
  light: false,
  loading: false,
  loadingProps: {},
  rightComponent: null,
  style: {},
  title: '',
  titleStyle: {}
};

export default function Button({
  disabled,
  disabledStyle,
  disabledTitleStyle,
  leftComponent,
  light,
  loading,
  loadingProps,
  rightComponent,
  style,
  title,
  titleStyle,
  ...attributes
}) {
  const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

  return (
    <Touchable
      activeOpacity={light ? 0.4 : 0.8}
      disabled={disabled}
      underlayColor={light ? 'transparent' : undefined}
      {...attributes}
    >
      <View
        style={StyleSheet.flatten([
          styles.button,
          style,
          light && styles.light,
          disabled && styles.disabled,
          disabled && disabledStyle
        ])}
      >
        {loading ? (
          <ActivityIndicator animating {...loadingProps} />
        ) : (
          <>
            {leftComponent}
            <Text
              color="light"
              style={StyleSheet.flatten([
                styles.title,
                titleStyle,
                disabled && styles.disabledTitle,
                disabled && disabledTitleStyle
              ])}
            >
              {title}
            </Text>
            {rightComponent}
          </>
        )}
      </View>
    </Touchable>
  );
}
