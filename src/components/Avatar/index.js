import React from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  TouchableNativeFeedback,
  TouchableOpacity,
  View
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const Touchable = Platform.OS === 'android' ? TouchableNativeFeedback : TouchableOpacity;
const sizes = {
  small: 34,
  medium: 50,
  large: 75,
  extraLarge: 150
};

Avatar.propTypes = {};

Avatar.defaultProps = {};

export default function Avatar({ containerAttributes, containerStyle, rounded, size }) {
  const Container =
    containerAttributes.onPress || containerAttributes.onLongPress ? Touchable : View;

  return (
    <Container
      style={StyleSheet.flatten([
        styles.container,
        { width: sizes[size], height: sizes[size] },
        rounded && { borderRadius: sizes[size] / 2 },
        containerStyle
      ])}
      {...containerAttributes}
    >
      <Image
        placeholderStyle={StyleSheet.flatten([
          placeholderStyle,
          hidePlaceholder && { backgroundColor: 'transparent' },
        ])}
        PlaceholderContent={PlaceholderContent}
        containerStyle={StyleSheet.flatten([
          styles.overlayContainer,
          overlayContainerStyle,
          rounded && { borderRadius: width / 2, overflow: 'hidden' },
        ])}
        source={source}
        {...imageProps}
        style={StyleSheet.flatten([
          styles.avatar,
          imageProps && imageProps.style,
          avatarStyle,
        ])}
        ImageComponent={ImageComponent}
      />
    </Container>
  );
}
