// import Events from '../components/Events/Events';

import React from 'react';
import { shallow } from 'enzyme';
import { stub } from 'sinon';
import LoginControl from '../components/ui-components/LoginControl';

describe('<LoginControl />', () => {

  it('shows login and register buttons', () => {
    const component = shallow(<LoginControl />);
    const loginButton = <button>Login</button>;
    const registerButton = <button>Register</button>;
    expect(component.contains(loginButton)).toEqual(true);
    expect(component.contains(registerButton)).toEqual(true);
  });

  it('replaces login and register with start new group, profile, and logout buttons when logged in', () => {
    // const onChangeValue = stub();
    const component = shallow(<LoginControl />);
    const loginButton = <button>Login</button>;  //not being hit! 
    const logoutButton = <button>Logout</button>;
    const startNewGroupLink = <label>Start a new group</label>;
    const profileLink = <label>Profile</label>;
    button.find('loginButton').simulate('click');
    expect(component.contains(logoutButton)).toEqual(true);
    expect(component.contains(startNewGroupLink)).toEqual(true);
    expect(component.contains(profileLink)).toEqual(true);
  })
})