import React, { Component } from 'react';
import axios from "axios";
import CreateGroupForm from './CreateGroupForm'


class CreateGroup extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = { events: [], credentials: {} };
  // }

  // componentDidMount() {
  //   this.getEvents()
  // }

  // async getEvents() {
  //   const response = await axios.get("http://localhost:3000/events")
  //   const events = response.data.events
  //   this.setState({ events });
  // }

  render() {
    return (
      <CreateGroupForm />
    )
  }
}

export default CreateGroup
