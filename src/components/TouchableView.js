import React from 'react';
import { Platform, TouchableNativeFeedback, TouchableOpacity, View } from 'react-native';

const isAndroid = Platform.OS === 'android';

const Touchable = isAndroid ? TouchableNativeFeedback : TouchableOpacity;

const TouchableView = ({ children, style, ...attributes }) => (
  <Touchable style={!isAndroid && style} {...attributes}>
    <View style={isAndroid && style}>{children}</View>
  </Touchable>
);

TouchableView.propTypes = Touchable.propTypes;

TouchableView.defaultProps = Touchable.getDefaultProps();

export default React.memo(TouchableView);
