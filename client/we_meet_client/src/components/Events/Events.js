import React, { Component } from 'react';
import axios from "axios";
import { ErrorText, FillButton } from 'tailwind-react-ui';

class Events extends Component {

  constructor(props) {
    super(props);
    this.state = { events: [], message: '' };
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
      await axios.post("http://localhost:3000/events/" + id + '/attendees')
    } catch(error) {
      let message = JSON.parse(error.request.responseText).errors[0]
      this.setState({ message: message })
    }
  }
  
  render() {
    let errorMessage
    if (this.state.message) {
      errorMessage = <ErrorText>{this.state.message}</ErrorText>
    }
    return (
      <div>
        {errorMessage}
        <h3>Events List</h3>
        <ul>
          {this.state.events.map(event => <li key={event.id}>{event.title} 
            <FillButton brand='secondary' small='true' id={`attend-event-${event.id}`} onClick={this.rsvpHandler.bind(this, event.id)} >RSVP</FillButton>
          </li>)}
        </ul>
      </div>
    )
  }
}

export default Events;