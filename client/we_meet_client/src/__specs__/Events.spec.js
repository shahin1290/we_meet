import React from 'react';
import { shallow } from 'enzyme';
import EventsCarousel from '../components/ui-components/EventsCarousel';

// NOTE: this component is currently replaced by EventsCarousel component.
// But keep it in case we need it for a future Events page.

describe('<Events />', () => {
  it('shows "Events near you" header text', () => {
    const component = shallow(<EventsCarousel />);
    const header = component.find('Events near you');
    expect(component.containsMatchingElement(header));
  });
})