import React, { Component } from "react";

class EventView extends Component {

  constructor(props) {
    super(props);
    this.state = { event: this.props.location.state.event };
  }


  componentDidMount() {
    console.log('event view')
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
