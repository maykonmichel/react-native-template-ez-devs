import React from 'react';
import { Image, StyleSheet, View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';

import styles from './styles';
import Text from '../Text';

export default class Card extends React.PureComponent {
  static propTypes = {
    bodyAttributes: PropTypes.shape(ViewPropTypes),
    bodyStyle: ViewPropTypes.style,
    children: PropTypes.oneOfType([PropTypes.arrayOf(PropTypes.node), PropTypes.node]),
    containerAttributes: PropTypes.shape(ViewPropTypes),
    containerStyle: ViewPropTypes.style,
    image: Image.propTypes.source,
    imageStyle: Image.propTypes.style,
    imageAttributes: PropTypes.shape(Image.propTypes),
    title: PropTypes.string,
    titleStyle: Text.propTypes.style,
    titleAttributes: PropTypes.shape(Text.propTypes),
    titleContainerAttributes: PropTypes.shape(ViewPropTypes),
    titleContainerStyle: ViewPropTypes.style
  };

  static defaultProps = {
    bodyStyle: {},
    bodyAttributes: {},
    children: undefined,
    containerAttributes: {},
    containerStyle: {},
    image: undefined,
    imageStyle: {},
    imageAttributes: {},
    title: undefined,
    titleStyle: {},
    titleAttributes: {},
    titleContainerStyle: {},
    titleContainerAttributes: {}
  };

  render() {
    const {
      bodyStyle,
      bodyAttributes,
      children,
      containerAttributes,
      containerStyle,
      image,
      imageStyle,
      imageAttributes,
      title,
      titleStyle,
      titleAttributes,
      titleContainerStyle,
      titleContainerAttributes
    } = this.props;
    return (
      <View style={StyleSheet.flatten([styles.container, containerStyle])} {...containerAttributes}>
        <If condition={!!title}>
          <View
            style={StyleSheet.flatten([styles.titleContainer, titleContainerStyle])}
            {...titleContainerAttributes}
          >
            <Text style={StyleSheet.flatten([styles.title, titleStyle])} {...titleAttributes}>
              {title}
            </Text>
          </View>
        </If>
        <If condition={!!image}>
          <Image
            style={StyleSheet.flatten([styles.image, imageStyle])}
            source={image}
            {...imageAttributes}
          />
        </If>
        <If condition={!!children}>
          <View style={StyleSheet.flatten([styles.body, bodyStyle])} {...bodyAttributes}>
            {children}
          </View>
        </If>
      </View>
    );
  }
}
