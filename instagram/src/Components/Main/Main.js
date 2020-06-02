import React, { Component } from "react";
import "./Main.css";
import Newfeed from "./Newfeed/Newfeed";
import Profile from "./Profile/Profile";

class Main extends Component {
  render() {
    return (
      <section className="main">
        <div className="container main__content">
          <Newfeed />
          <Profile />
        </div>
      </section>
    );
  }
}

export default Main;
