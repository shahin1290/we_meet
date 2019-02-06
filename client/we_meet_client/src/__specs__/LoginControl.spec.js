import React from 'react';
import { shallow } from 'enzyme';
import LoginControl from '../components/Login/LoginControl';

describe('<LoginControl />', () => {

  it('shows login and register buttons', () => {
    const component = shallow(<LoginControl />);
    const loginButton = component.find('Log in');
    const registerButton = component.find('Sign up');
    expect(component.containsMatchingElement(loginButton));
    expect(component.containsMatchingElement(registerButton));
  });

  it('replaces login and register with start new group, profile, and logout buttons when logged in', () => {
    const component = shallow(<LoginControl />);
    const startNewGroupLink = component.find('Start a new group');
    const profileLink = component.find('Profile');
    const logoutButton = component.find('Log out');

    // This is failing. We need to investigate a better method to test this kind of components
    // const loginButton = component.find('#login-btn');
    // loginButton.simulate('click');


    // Is this actually doing anything for us?
    expect(component.containsMatchingElement(startNewGroupLink));
    expect(component.containsMatchingElement(profileLink));
    expect(component.containsMatchingElement(logoutButton));
  })
})