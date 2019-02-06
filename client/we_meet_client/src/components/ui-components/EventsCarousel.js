import React, { Component } from "react";
import Carousel from "nuka-carousel";
import { Card, Box, CardBody } from "tailwind-react-ui";
import moment from "moment";

class EventsCarousel extends Component {
  constructor(props) {
    super(props);
    this.state = {
      events: [
        {
          id: 1,
          title: "Hackathon at Craft Academy",
          image: "./assets/images/hackathon.jpg",
          avatar: "./assets/images/person.jpg",
          date: "2008-09-15T15:53:00",
          organizer: "Tom Jones",
          group: "Craft Academy"
        },
        {
          id: 2,
          title: "Amphibian workouts",
          image: "./assets/images/fit_frogs.jpg",
          avatar: "./assets/images/person.jpg",
          date: "2008-09-15T15:53:00",
          organizer: "Lazy Bob",
          group: "Fitness trends"
        },
        {
          id: 3,
          title: "Kids game night",
          image: "./assets/images/kids_playing.jpg",
          avatar: "./assets/images/person.jpg",
          date: "2008-09-15T15:53:00",
          organizer: "Gill Andersen",
          group: "Family events"
        },
        {
          id: 4,
          title: "Wining & dining: Italian night",
          image: "./assets/images/dining.jpg",
          avatar: "./assets/images/person.jpg",
          date: "2008-09-15T15:53:00",
          organizer: "Bob Schnell",
          group: "Food excursions"
        },
        {
          id: 5,
          title: "Exotic vibes",
          image: "./assets/images/exotic_music.jpg",
          avatar: "./assets/images/person.jpg",
          date: "2008-09-15T15:53:00",
          organizer: "Jonas Gardell",
          group: "New music"
        },
        {
          id: 6,
          title: "Craft Academny graduation",
          image: "./assets/images/graduation.jpg",
          avatar: "./assets/images/person.jpg",
          date: "2008-09-15T15:53:00",
          organizer: "Tom Jones",
          group: "Craft Academy"
        }
      ]
    };
  }

  render() {
    let events = this.state.events;
    let eventsList = events.map(event => {
      return (
        <Box key={event.id} inlineBlock >
          <Card
            className="card event-card"
            border
            maxW="sm"
          >
            <div>
              <img
                src={event.image}
                className="card-image"
                alt={`image_${event.id}`}
              />
            </div>
            <div
              className="top-left date-card"
            >
              <div
                className="date-card-day"
              >
                {moment(event.date).format("DD")}
              </div>
              <div 
                className="date-card-month">
                {moment(event.date).format("MMM")}
              </div>
            </div>
            <CardBody
              className="event-card-body"
            >
              <div
                className="date-line"
              >
                {moment(event.date).format("dddd, MMMM DD, HH:mm")}
              </div>
              <div
                className="title-line"
              >
                {event.title}
              </div>
            </CardBody>
            <div style={{ height: "40px" }}>
              <img
                className="bottom-left event-card-avatar"
                src={event.avatar}
                alt={`image_${event.organizer}`}
              />
              <div
                className="event-card-extra-info"
              >
                <div>Hosted by {event.organizer}</div>
                <div>
                  From{" "}
                  <span style={{ color: "#353e48", fontWeight: "500" }}>
                    {event.group}
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
        <Carousel renderBottomCenterControls="null" slidesToShow="3" style={{width:"100%"}}>
          {eventsList}
        </Carousel>
      </div>
    );
  }
}

export default EventsCarousel;