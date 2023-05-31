import React, { Component } from "react";
import Nav from "./Nav";
import Index from "./movies";
import "./Interface.css";

class Interface extends Component {
  render() {
    return (
      <div className="appContainer">
        <header>
          <h1>Russ Flix</h1>
          <nav>
            <Nav />
          </nav>
        </header>
        <main>
          <Index />
        </main>
        <footer>Copyright 2023 Russ Flix</footer>
      </div>
    );
  }
}

export default Interface;
