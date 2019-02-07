import React, { Component } from 'react';
import { LinkButton, OutlineButton } from 'tailwind-react-ui';
import { connect } from 'react-redux';
import CreateGroupForm from './CreateGroupForm'


class CreateGroup extends Component {



  render() {
    return (
      <CreateGroupForm />
    )
  }
}

export default CreateGroup
