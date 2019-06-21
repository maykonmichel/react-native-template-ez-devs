import React from 'react';
import { shallow } from 'enzyme';

import TouchableView from '../TouchableView';

describe('Testing Text component', () => {
  const touchableView = shallow(<TouchableView>Test</TouchableView>);
  it('renders as expected', () => {
    expect(touchableView).toMatchSnapshot();
  });
  it('calls function on press', () => {
    const onPress = jest.fn();
    touchableView.setProps({ onPress });
    touchableView.simulate('press');
    expect(onPress.mock.calls.length).toBe(1);
  });
});
