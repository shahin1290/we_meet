import React from 'react';
import { shallow } from 'enzyme';

import Events from '../components/Events/Events';

describe('<Events />', () => {
  it('renders welcome text', () => {
    const component = shallow(<Events />);
    const header = <h3>Events List</h3>;
    expect(component.contains(header)).toEqual(true);
  });
})