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