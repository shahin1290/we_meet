import React from 'react';
import { shallow } from 'enzyme';
import EventsCarousel from '../components/ui-components/main-view/EventsCarousel';

describe('<EventsCarousel />', () => {
  it('shows "Events near you" header text', () => {
    const component = shallow(<EventsCarousel />);
    const header = component.find('Events near you');
    expect(component.containsMatchingElement(header));
  });
})