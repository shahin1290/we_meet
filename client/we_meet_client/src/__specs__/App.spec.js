import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';


describe('<App />', () => {
  it('renders welcome text', () => {
    const component = shallow(<App />);
    const header = <code>src/App.js</code>;
    expect(component.contains(header)).toEqual(true);
  });
})