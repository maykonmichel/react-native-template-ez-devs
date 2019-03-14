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

const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;

export default class Button extends React.PureComponent {
  static propTypes = {
    disabled: PropTypes.bool,
    disabledStyle: ViewPropTypes.style,
    disabledTitleStyle: PropTypes.shape(Text.propTypes),
    leftComponent: PropTypes.element,
    light: PropTypes.bool,
    loading: PropTypes.bool,
    loadingAttributes: PropTypes.shape(ActivityIndicator.propTypes),
    rightComponent: PropTypes.element,
    style: ViewPropTypes.style,
    title: PropTypes.string,
    titleStyle: PropTypes.shape(Text.propTypes)
  };

  static defaultProps = {
    disabled: false,
    disabledStyle: {},
    disabledTitleStyle: {},
    leftComponent: null,
    light: false,
    loading: false,
    loadingAttributes: {},
    rightComponent: null,
    style: {},
    title: '',
    titleStyle: {}
  };

  render() {
    const {
      disabled,
      disabledStyle,
      disabledTitleStyle,
      leftComponent,
      light,
      loading,
      loadingAttributes,
      loadingStyles,
      rightComponent,
      style,
      title,
      titleStyle,
      ...attributes
    } = this.props;
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
          <If condition={loading}>
            <ActivityIndicator
              style={StyleSheet.flatten([styles.loading, loadingStyles])}
              animating
              color="white"
              {...loadingAttributes}
            />
          </If>
          {leftComponent}
          <Text
            color="shine"
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
        </View>
      </Touchable>
    );
  }
}
