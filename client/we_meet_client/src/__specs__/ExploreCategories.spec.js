import React from 'react';
import { shallow } from 'enzyme';
import ExploreCategories from '../components/ui-components/main-view/ExploreCategories';

describe('<ExploreCategories />', () => {
  it('shows "Events near you" header text', () => {
    const component = shallow(<ExploreCategories />);
    const header = component.find('Explore categories');
    expect(component.containsMatchingElement(header));
  });
})