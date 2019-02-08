import React, { Component } from "react";
import Hero from "../ui-components/main-view/Hero";
import EventsCarousel from "../ui-components/main-view/EventsCarousel";
import ExploreCategories from "../ui-components/main-view/ExploreCategories";

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