import React, { Component } from 'react';
import axios from "axios";
import { connect } from 'react-redux';



import { ErrorText, FillButton, List, Text } from 'tailwind-react-ui';

const mapStateToProps = (state) => {
  return {
    currentUser: { email: state.reduxTokenAuth.currentUser.attributes.email }
  }
}

class Events extends Component {

  constructor(props) {
    super(props);
    this.state = { events: [], credentials: {} };
  }

  componentDidMount() {
    this.getEvents()
  }

  async getEvents() {
    const response = await axios.get("http://localhost:3000/events")
    const events = response.data.events
    this.setState({ events });
  }

  render() {
    let responseMessage
    if (this.props.responseMessage) {
      responseMessage = <ErrorText>{this.props.responseMessage}</ErrorText>
    }

    const events = (
      <List fullWidth>
        {this.state.events.map(event =>
          <React.Fragment key={event.id}>
            <Text >{event.title}</Text>
            <FillButton
              brand='secondary'
              small
              id={`attend-event-${event.id}`}
              onClick={this.props.rsvpHandler.bind(this, event.id)}
            >
              RSVP
            </FillButton>
          </React.Fragment>
        )}
      </List>
    )

    return (
      <div>
        {responseMessage}
        <h3 style={{ marginBottom: "4rem" }}>Events List</h3>
        <ul>
          {events}
        </ul>
        {this.props.currentUser.email}
      </div>
    )
  }
}

export default connect(mapStateToProps)(Events)
