import React from 'react';
import { shallow } from 'enzyme';
import LoginControl from '../components/Login/LoginControl';

describe('<LoginControl />', () => {

  it('shows login and register buttons', () => {
    const component = shallow(<LoginControl />);
    // const loginButton = <button>Login</button>;
    // const registerButton = <button>Register</button>;
    const loginButton = component.find('Log in');
    const registerButton = component.find('Sign up');
    expect(component.containsMatchingElement(loginButton));
    expect(component.containsMatchingElement(registerButton));
    // expect(component.contains(loginButton)).toEqual(true);
    // expect(component.contains(registerButton)).toEqual(true);
  });

  it('replaces login and register with start new group, profile, and logout buttons when logged in', () => {
    const component = shallow(<LoginControl />);
    const startNewGroupLink = component.find('Start a new group');
    const profileLink = component.find('Profile');
    const logoutButton = component.find('Log out');

    const loginButton = component.find('button.login-btn');
    loginButton.simulate('click');

    expect(component.containsMatchingElement(startNewGroupLink));
    expect(component.containsMatchingElement(profileLink));
    expect(component.containsMatchingElement(logoutButton));
  })
})