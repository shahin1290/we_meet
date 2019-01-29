import React, { Component } from 'react';
import axios from "axios"

class Events extends Component {
 
  state = {
    events: []
  }

  async getEvents() {
    const res = await axios.get("http://localhost:3000/events")
    
    const events = res.data.events
    this.setState({ events });

  }

  componentDidMount() {
    this.getEvents()
  }

  render () {
    return (
      <ul>
        { this.state.events.map(event => <li>{event.title}</li>)}
      </ul>
    )
  }
}

export default Events;