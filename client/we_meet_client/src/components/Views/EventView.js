import React, { Component } from "react";
import axios from "axios";

class EventView extends Component {

  constructor(props) {
    super(props);
    this.state = { event: {} };
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
        <div
          style={{
            color: "red",
            fontWeight: "700",
            textAlign: "center",
            fontSize: "40px",
            marginBottom: "50px"
          }}
        >
          This is the event page for {this.state.event.title}
        </div>
      </>
    );
  }
}

export default EventView;

{
  /* Leave the below in until we decide what to do with it */
}
{
  /* <Events rsvpHandler={this.rsvp} responseMessage={this.state.containerMessage} /> */
}
