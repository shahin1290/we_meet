import React, { Component } from "react";
import Hero from "../ui-components/Hero";
import EventsCarousel from "../ui-components/EventsCarousel";
import ExploreCategories from "../ui-components/ExploreCategories";

class MainView extends Component {
  render() {
    return (
      <>
        <Hero />
        <EventsCarousel />
        <ExploreCategories />
      </>
    );
  }
}

export default MainView;

{/* Leave the below in until we decide what to do with it */}
{/* <Events rsvpHandler={this.rsvp} responseMessage={this.state.containerMessage} /> */}

