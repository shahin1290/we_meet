import React, { Component } from "react";
import axios from "axios";

import Carousel from "nuka-carousel";
import { Card, Box, CardBody } from "tailwind-react-ui";
import moment from "moment";
import { Link } from 'react-router-dom';

class EventsCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: []
    };
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
    let events = this.state.events;
    let eventsList = events.map(event => {
      return (
        <Box key={event.id} inlineBlock>
          <Link to={{pathname: `/events/${event.id}`, state: {event}}} style={{ textDecoration: 'none' }}>
            <Card className="card event-card" id="card" border maxW="sm">
              <div>
                <img
                  src={event.image_url}
                  className="card-image"
                  alt={`image_${event.id}`}
                />
              </div>
              <div className="top-left date-card">
                <div className="date-card-day">
                  {moment(event.date).format("DD")}
                </div>
                <div className="date-card-month">
                  {moment(event.date).format("MMM")}
                </div>
              </div>
              <CardBody className="event-card-body">
                <div className="date-line">
                  {moment(event.date).format("dddd, MMMM DD, HH:mm")}
                </div>
                <div className="title-line">{event.title}</div>
              </CardBody>
              <div style={{ height: "40px" }}>
                <img
                  className="bottom-left event-card-avatar"
                  src={event.organizer.image_url }
                  alt={`image_${event.organizer.email }`}
                />
                <div className="event-card-extra-info">
                  <div>Hosted by {event.organizer.email}</div>
                  <div>
                    From{" "}
                    <span style={{ color: "#353e48", fontWeight: "500" }}>
                      {event.group.name}
                    </span>
                  </div>
                </div>
              </div>
            </Card>
            <div
              style={{
                fontSize: "16px",
                fontWeight: "600",
                color: "#2e3e48",
                marginBottom: "1rem"
              }}
            >
              {event.name}
            </div>
          </Link>
        </Box>
      );
    });

    return (
      <div
        style={{ margin: "50px", paddingLeft: "8rem", paddingRight: "4rem" }}
      >
        <h1
          style={{
            fontSize: "24px",
            fontWeight: "600",
            color: "#2e3e48",
            marginBottom: "1rem"
          }}
        >
          Events near you
        </h1>
        <Carousel
          renderBottomCenterControls="null"
          slidesToShow="3"
          style={{ width: "100%" }}
        >
          {eventsList}
        </Carousel>
      </div>
    );
  }
}

export default EventsCarousel;
