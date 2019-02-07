import React, { Component } from "react";
import axios from "axios";
import EventHeader from '../ui-components/EventView/EventHeader'

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
        {/* <EventBodyLeftSide />
        <EventBodyRightSide /> */}
      </>
    );
  }
}

export default EventView;

{/* Leave the below in until we decide what to do with it */}
{/* <Events rsvpHandler={this.rsvp} responseMessage={this.state.containerMessage} /> */}
