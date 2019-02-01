import React, { Component } from 'react';
import axios from "axios"

class Events extends Component {

  constructor(props) {
    super(props);
    this.state = { events: [] };
  }

  async getEvents() {
    const response = await axios.get("http://localhost:3000/events")
    const events = response.data.events
    this.setState({ events });
  }

  componentDidMount() {
    this.getEvents()
  }

  async rsvpHandler(id) {
    try {
      const response = await axios.post("http://localhost:3000/events/" + id + '/attendees')
    } catch(error) {
      console.log(error.response.status)
    }
    debugger
  }

  render() {
    return (
      <div>
        <h3>Events List</h3>
        <ul>
          {this.state.events.map(event => <li key={event.id}>{event.title} 
            <button id={`attend-event-${event.id}`} onClick={this.rsvpHandler.bind(this, event.id)} >RSVP</button>
          </li>)}
        </ul>
      </div>
    )
  }
}

export default Events;