import React from 'react';
import { StyleSheet, TouchableOpacity, View, ViewPropTypes } from 'react-native';
import PropTypes from 'prop-types';
import { keysIn } from 'lodash';

import styles from './styles';
import Badge from '../Badge';
import Icon from '../Icon';
import Image from '../Image';
import Text from '../Text';

const sizes = {
  small: { value: 34, typography: 'callout' },
  medium: { value: 50, typography: 'title2' },
  large: { value: 75, typography: 'display1' },
  extraLarge: { value: 150, typography: 'display4' }
};

export default class Avatar extends React.PureComponent {
  static propTypes = {
    badge: PropTypes.bool,
    badgeAttributes: PropTypes.shape(Badge.propTypes),
    badgeIconAttributes: PropTypes.shape(Icon.propTypes),
    containerStyle: ViewPropTypes.style,
    iconAttributes: PropTypes.shape(Icon.propTypes),
    imageAttributes: PropTypes.shape(Image.propTypes),
    placeholder: PropTypes.element,
    rounded: PropTypes.bool,
    size: PropTypes.oneOf(keysIn(sizes)),
    style: ViewPropTypes.style,
    title: PropTypes.string,
    titleAttributes: PropTypes.shape(Text.propTypes),
    titleStyle: Text.propTypes.style
  };

  static defaultProps = {
    badge: false,
    badgeAttributes: {},
    badgeIconAttributes: {},
    containerStyle: {},
    iconAttributes: {},
    imageAttributes: {},
    placeholder: undefined,
    rounded: true,
    size: 'medium',
    style: {},
    title: undefined,
    titleAttributes: {},
    titleStyle: {}
  };

  render() {
    const {
      badge,
      badgeAttributes,
      badgeIconAttributes,
      containerStyle,
      iconAttributes,
      imageAttributes,
      placeholder: placeholderContent,
      rounded,
      size: sizeName,
      style,
      title,
      titleStyle,
      titleAttributes,
      ...attributes
    } = this.props;

    const size = sizes[sizeName];
    const Container = attributes.onPress || attributes.onLongPress ? TouchableOpacity : View;
    const placeholder = placeholderContent || (
      <Choose>
        <When condition={!!title}>
          <Text
            style={StyleSheet.flatten([styles.title, titleStyle])}
            typography={size.typography}
            {...titleAttributes}
          >
            {title}
          </Text>
        </When>
        <Otherwise>
          <Icon name="user" size={size.value * 0.9} color="white" {...iconAttributes} />
        </Otherwise>
      </Choose>
    );

    return (
      <Container
        style={StyleSheet.flatten([
          styles.container,
          { width: size.value, height: size.value },
          rounded && { borderRadius: size.value / 2 },
          containerStyle
        ])}
        {...attributes}
      >
        <Image
          style={StyleSheet.flatten([
            styles.avatar,
            rounded && { borderRadius: size.value / 2, overflow: 'hidden' },
            style
          ])}
          placeholder={placeholder}
          {...imageAttributes}
        />
        <If condition={badge}>
          <Badge size={sizeName} style={styles.badge} {...badgeAttributes}>
            <Icon name="pencil" color="white" size={size.value / 5} {...badgeIconAttributes} />
          </Badge>
        </If>
      </Container>
    );
  }
}
