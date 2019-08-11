import React, { useEffect, useState } from 'react';
import { Animated, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

const Fade = ({ children, style, duration, fadeIn, fadeOut, ...attributes }) => {
  const [opacity] = useState(new Animated.Value(fadeIn ? 0 : 1));

  useEffect(() => {
    // Fade in if enabled
    if (fadeIn) {
      Animated.timing(opacity, {
        toValue: 1,
        duration,
        useNativeDriver: true
      }).start();
    }
    return () => {
      // Fade out if enabled
      if (fadeOut) {
        Animated.timing(opacity, {
          toValue: 0,
          duration,
          useNativeDriver: true
        }).start();
      }
    };
  }, []);

  return (
    <Animated.View
      style={StyleSheet.flatten([
        {
          opacity
        },
        style
      ])}
      {...attributes}
    >
      {children}
    </Animated.View>
  );
};

Fade.propTypes = {
  ...Animated.View.propTypes,
  style: Animated.View.propTypes.style,
  duration: PropTypes.number,
  fadeIn: PropTypes.bool,
  fadeOut: PropTypes.bool
};

Fade.defaultProps = {
  style: {},
  duration: 350,
  fadeIn: true,
  fadeOut: false
};

export default Fade;
