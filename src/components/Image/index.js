import React from 'react';
import {
  Animated,
  Image as RNImage,
  Platform,
  StyleSheet,
  View,
  ViewPropTypes
} from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';

const placeholderContainerOpacity = new Animated.Value(1);

const onLoadEnd = () => {
  const minimumWait = 100;
  const staggerNonce = 200 * Math.random();

  setTimeout(
    () =>
      Animated.timing(placeholderContainerOpacity, {
        toValue: 0,
        duration: 350,
        useNativeDriver: true
      }).start(),
    minimumWait + staggerNonce
  );
};

Image.propTypes = {
  containerAttributes: PropTypes.shape(ViewPropTypes),
  containerStyle: ViewPropTypes.style
};

Image.defaultProps = {
  containerAttributes: {},
  containerStyle: {}
};

export default function Image({
  containerAttributes,
  containerStyle,
  placeholderContent,
  placeholderStyle,
  style,
  ...attributes
}) {
  return (
    <View style={StyleSheet.flatten([styles.container, containerStyle])} {...containerAttributes}>
      {Platform.select({
        android: (
          <>
            <View style={styles.placeholderContainer}>
              <Animated.View
                style={StyleSheet.flatten([
                  styles.placeholder,
                  {
                    backgroundColor: placeholderContainerOpacity.interpolate({
                      inputRange: [0, 1],
                      outputRange: [styles.placeholder.backgroundColor, 'transparent']
                    })
                  },
                  placeholderStyle
                ])}
              >
                {placeholderContent}
              </Animated.View>
            </View>

            <RNImage {...attributes} style={style} />
          </>
        ),
        ios: (
          <>
            <RNImage {...attributes} onLoadEnd={onLoadEnd} style={style} />

            <Animated.View
              style={StyleSheet.flatten([
                styles.placeholderContainer,
                { opacity: placeholderContainerOpacity }
              ])}
            >
              <View style={StyleSheet.flatten([style, styles.placeholder, placeholderStyle])}>
                {placeholderContent}
              </View>
            </Animated.View>
          </>
        )
      })}
    </View>
  );
}
