import React, { Component } from "react";
import Hero from "../ui-components/MainView/Hero";
import EventsCarousel from "../ui-components/MainView/EventsCarousel";
import ExploreCategories from "../ui-components/MainView/ExploreCategories";

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