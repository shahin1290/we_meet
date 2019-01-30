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

  render() {
    return (
      <div>
        <h3>Events List</h3>
        <ul>
          {this.state.events.map(event => <li>{event.title}</li>)}
        </ul>
      </div>
    )
  }
}

export default Events;