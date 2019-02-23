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

export default class Image extends React.PureComponent {
  static propTypes = {
    ...RNImage.propTypes,
    containerAttributes: PropTypes.shape(ViewPropTypes),
    containerStyle: ViewPropTypes.style,
    placeholder: PropTypes.element,
    placeholderStyle: ViewPropTypes.style,
    style: RNImage.propTypes.style
  };

  static defaultProps = {
    containerAttributes: {},
    containerStyle: {},
    placeholder: null,
    placeholderStyle: {},
    style: {}
  };

  placeholderContainerOpacity = new Animated.Value(1);

  onLoadEnd = () => {
    const minimumWait = 100;
    const staggerNonce = 200 * Math.random();

    setTimeout(
      () =>
        Animated.timing(this.placeholderContainerOpacity, {
          toValue: 0,
          duration: 350,
          useNativeDriver: true
        }).start(),
      minimumWait + staggerNonce
    );
  };

  render() {
    const {
      containerAttributes,
      containerStyle,
      placeholder,
      placeholderStyle,
      style,
      ...attributes
    } = this.props;

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
                      backgroundColor: this.placeholderContainerOpacity.interpolate({
                        inputRange: [0, 1],
                        outputRange: [styles.placeholder.backgroundColor, 'transparent']
                      })
                    },
                    placeholderStyle
                  ])}
                >
                  {placeholder}
                </Animated.View>
              </View>

              <RNImage {...attributes} style={style} />
            </>
          ),
          ios: (
            <>
              <RNImage {...attributes} onLoadEnd={this.onLoadEnd} style={style} />

              <Animated.View
                style={StyleSheet.flatten([
                  styles.placeholderContainer,
                  { opacity: this.placeholderContainerOpacity }
                ])}
              >
                <View style={StyleSheet.flatten([style, styles.placeholder, placeholderStyle])}>
                  {placeholder}
                </View>
              </Animated.View>
            </>
          )
        })}
      </View>
    );
  }
}
