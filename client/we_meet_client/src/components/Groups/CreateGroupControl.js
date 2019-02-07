import React, { Component } from 'react';
import { LinkButton, OutlineButton } from 'tailwind-react-ui';
import { connect } from 'react-redux';
import CreateGroupForm from './CreateGroupForm'


class CreateGroup extends Component {

  constructor(props) {
    super(props);
    this.state = { 
      title: '',
      description: '',
      location: ''
     };
  }


  render() {
    return (
      <CreateGroupForm />
    )
  }
}

export default CreateGroup
