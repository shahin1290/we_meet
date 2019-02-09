import React, { Component } from "react";
import axios from "axios";
import EventHeader from '../ui-components/event-view/EventHeader'
import EventBody from '../ui-components/event-view/EventBody'

class EventView extends Component {

  constructor(props) {
    super(props);
    this.state = {
      event: {
        title: '',
        date: '',
        time: '',
        description: '',
        location: '',
        group: {
          name: '',
          organizer: {}
        },
        attendees: []
      }
    };
  }

  componentDidMount() {
    const id = this.props.location.state.event.id
    this.getEvent(id)
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