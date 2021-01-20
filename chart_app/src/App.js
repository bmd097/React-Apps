import React, { Component } from "react";
import "./App.css";
import LineGraph from "./LineGraph";
import BarGraph from "./BarGraph";
import DoughGraph from "./DoughGraph";

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <div className="graph">
          <LineGraph />
        </div>
        <div className="graph">
          <BarGraph/>
        </div>
        <div className="graph">
          <DoughGraph/>
        </div>
      </div>
    );
  }
}

export default App;
