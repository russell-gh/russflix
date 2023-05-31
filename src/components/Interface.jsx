import React, { Component } from "react";
import Nav from "./Nav";

class Interface extends Component {
  render() {
    return (
      <>
        <header>
          <nav>
            <Nav />
          </nav>
        </header>
        <main></main>
        <footer></footer>
      </>
    );
  }
}

export default Interface;
