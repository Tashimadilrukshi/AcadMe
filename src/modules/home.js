import React, { Component } from "react";
import HomeCarousel from "../components/HomeCarousel";

export class Home extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <HomeCarousel />
        {/* Add more components to home page */}
      </div>
    );
  }
}

export default Home;