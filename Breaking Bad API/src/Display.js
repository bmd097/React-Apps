import React, { Component } from "react";
import Character from "./Character";
import Episode from "./Episode";

class Display extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  render() {
    return (
      <div className="Display">
        {this.props.searchType === "characters"
          ? this.props.data.map((character) => <Character data={character} />)
          : this.props.data.map((episode) => <Episode data={episode} />)}
      </div>
    );
  }
}

export default Display;
