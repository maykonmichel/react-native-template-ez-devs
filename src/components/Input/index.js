import React from 'react';
import { Animated, Easing, StyleSheet, TextInput, View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import colors from '../../configs/colors';
import Text from '../Text';
import Icon from '../Icon';
import typographies from '../../configs/typographies';

export default class Input extends React.PureComponent {
  static propTypes = {
    animatedAttributes: PropTypes.shape(Animated.propTypes),
    animatedStyle: Animated.View.propTypes.style,
    containerAttributes: PropTypes.shape(ViewPropTypes),
    containerStyle: ViewPropTypes.style,
    error: PropTypes.string,
    errorAttributes: PropTypes.shape(Text.propTypes),
    errorStyle: Text.propTypes.style,
    icon: PropTypes.oneOfType([PropTypes.string, PropTypes.element]),
    iconAttributes: PropTypes.shape(Icon.propTypes),
    iconContainerStyle: ViewPropTypes.style,
    label: PropTypes.string,
    labelAttributes: PropTypes.shape(Text.propTypes),
    labelStyle: Text.propTypes.style,
    style: TextInput.propTypes.style
  };

  static defaultProps = {
    animatedAttributes: {},
    animatedStyle: {},
    containerAttributes: {},
    containerStyle: {},
    error: undefined,
    errorAttributes: {},
    errorStyle: {},
    icon: undefined,
    iconAttributes: {},
    iconContainerStyle: {},
    label: undefined,
    labelAttributes: {},
    labelStyle: {},
    style: {}
  };

  shakeAnimationValue = new Animated.Value(0);

  setNativeProps(nativeProps) {
    this.input.setNativeProps(nativeProps);
  }

  onChangeText = value => {
    const { onChange, name } = this.props;
    onChange(name, value);
  };

  onBlur = () => {
    const { onTouch, name } = this.props;
    onTouch(name);
  };

  blur() {
    this.input.blur();
  }

  clear() {
    this.input.clear();
  }

  isFocused() {
    return this.input.isFocused();
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
      labelStyle,
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
          <Text
            typography="body"
            style={StyleSheet.flatten([styles.label, labelStyle])}
            {...labelAttributes}
          >
            {label}
          </Text>
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
            onChangeText={this.onChangeText}
            onBlur={this.onBlur}
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
