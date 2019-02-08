import React, { Component } from "react";
import axios from "axios";
import EventHeader from '../ui-components/event-view/EventHeader'
import EventBody from '../ui-components/event-view/EventBody'

class EventView extends Component {

  constructor(props) {
    super(props);
    this.state = { event: {
      title: '',
      date: '',
      time: '',
      description: '',
      location:'',
      group: {
        name: ''
      }
    } };
  }

  componentDidMount() {

    try {
      this.setState({ event: this.props.location.state.event })
    }
    catch (err) {
      // Get the number from url
      let id = this.props.location.pathname.split('/').pop()
      this.getEvent(id)
    }
  }

  async getEvent(id) {
    const response = await axios.get(`http://localhost:3000/events/${id}`)
    const event = response.data.event
    this.setState({ event });
  }

  render() {
    return (
      <>
        <EventHeader event={this.state.event} />
        <EventBody event={this.state.event} />
      </>
    );
  }
}

export default EventView;