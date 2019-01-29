// "{\"events\":[{\"id\":93,\"title\":\"MyString\"},{\"id\":94,\"title\":\"MyString\"},{\"id\":95,\"title\":\"MyString\"}]}"

import React from 'react';
import { shallow } from 'enzyme';

import Events from '../App';


describe('<App />', () => {
  it('renders welcome text', () => {
    const component = shallow(<Events />);
    const header = <code>src/App.js</code>;
    expect(component.contains(header)).toEqual(true);
  });
})