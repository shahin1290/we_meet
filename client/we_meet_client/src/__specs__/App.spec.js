import React from 'react';
import { shallow } from 'enzyme';

import App from '../App';

describe('<App />', () => {
  it('renders WeMeet logo', () => {
    const component = shallow(<App />);
    const logo = component.find('#logo');
    expect(component.containsMatchingElement(logo));
  });
})