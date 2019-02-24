import React from 'react';
import { Animated, Easing, StyleSheet, TextInput, View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import colors from '../colors';
import Text from '../Text';
import Icon from '../Icon';
import typographies from '../typographies';

export default class Input extends React.PureComponent {
  static propTypes = {
    containerAttributes: PropTypes.shape(ViewPropTypes),
    containerStyle: ViewPropTypes.style,
    label: PropTypes.string
  };

  static defaultProps = {
    containerAttributes: {},
    containerStyle: {},
    label: undefined
  };

  shakeAnimationValue = new Animated.Value(0);

  setNativeProps(nativeProps) {
    this.input.setNativeProps(nativeProps);
  }

  clear() {
    this.input.clear();
  }

  isFocused() {
    return this.input.isFocused();
  }

  blur() {
    this.input.blur();
  }

  focus() {
    this.input.focus();
  }

  shake() {
    const { shakeAnimationValue } = this;

    shakeAnimationValue.setValue(0);
    Animated.timing(shakeAnimationValue, {
      duration: 375,
      toValue: 3,
      ease: Easing.bounce
    }).start();
  }

  render() {
    const {
      animatedAttributes,
      animatedStyle,
      containerAttributes,
      containerStyle,
      error,
      errorAttributes,
      errorStyle,
      icon,
      iconAttributes,
      iconContainerStyle,
      label,
      labelAttributes,
      style,
      ...attributes
    } = this.props;

    const translateX = this.shakeAnimationValue.interpolate({
      inputRange: [0, 0.5, 1, 1.5, 2, 2.5, 3],
      outputRange: [0, -15, 0, 15, 0, -15, 0]
    });

    return (
      <View style={StyleSheet.flatten([styles.container, containerStyle])} {...containerAttributes}>
        <If condition={!!label}>
          <Text {...labelAttributes}>{label}</Text>
        </If>
        <Animated.View
          style={StyleSheet.flatten([
            styles.animated,
            animatedStyle,
            { transform: [{ translateX }] }
          ])}
          {...animatedAttributes}
        >
          <Choose>
            <When condition={React.isValidElement(icon)}>{icon}</When>
            <When condition={!!icon}>
              <View style={StyleSheet.flatten([styles.iconContainer, iconContainerStyle])}>
                <Icon name={icon} size={20} color={colors.primary} {...iconAttributes} />
              </View>
            </When>
          </Choose>
          <TextInput
            ref={ref => {
              this.input = ref;
            }}
            style={StyleSheet.flatten([styles.input, typographies.headline, style])}
            {...attributes}
          />
        </Animated.View>
        <If condition={error}>
          <Text
            style={StyleSheet.flatten([styles.error, typographies.caption1, errorStyle])}
            {...errorAttributes}
          >
            {error}
          </Text>
        </If>
      </View>
    );
  }
}
