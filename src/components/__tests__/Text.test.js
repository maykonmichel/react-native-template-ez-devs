import React from 'react';
import { shallow } from 'enzyme';
import { forEach } from 'lodash';

import Text from '../Text';
import typographies from '../../configs/typographies';

describe('Testing Text component', () => {
  const text = shallow(<Text>Test</Text>);
  it('renders as expected', () => {
    expect(text).toMatchSnapshot();
  });

  forEach(typographies, (typography, key) => {
    it(`renders ${key} as expected`, () => {
      text.setProps({ typography });
      expect(text).toMatchSnapshot();
    });
  });
});
