import React, { Component } from "react";

import Header from "./components/Header.js";
import Bookings from "./containers/Bookings.js";
import Footer from "./components/Footer.js";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="container">
          <div className="row">
            <div className="col">
              <Header />
              <div>Search for Customers </div>
              <Bookings />
              <Footer />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
