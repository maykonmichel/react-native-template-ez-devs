import React from 'react';
import { shallow } from 'enzyme';

import Button from '../Button';

describe('Testing Button component', () => {
  const button = shallow(<Button>Test</Button>);
  it('renders as expected', () => {
    expect(button).toMatchSnapshot();
  });
  it('calls function on press', () => {
    const onPress = jest.fn();
    button.setProps({ onPress });
    button.simulate('press');
    expect(onPress.mock.calls.length).toBe(1);
  });
  it('renders with loading indicator', () => {
    button.setProps({ loading: true });
    expect(button).toMatchSnapshot();
  });
  it('renders disabled', () => {
    button.setProps({ disabled: true });
    expect(button).toMatchSnapshot();
  });
});
