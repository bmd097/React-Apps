import React, { Component } from "react";
import "./App.css";
import Display from "./Display";
import ErrorIn from "./ErrorIn";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchType: "characters",
      searchInput: "",
      data: [],
    };
    this.searchOption = React.createRef();
    this.input = React.createRef();
  }
  searchTypeSelect = () => {
    this.setState({
      searchType: this.searchOption.current.value,
    });
  };
  search = () => {
    if (this.input.current.value.trim() === "") {
      this.setState({
        data: [],
        searchInput: "",
      });
      return;
    }
    this.setState(
      {
        searchInput: this.input.current.value,
      },
      () => {
        if(this.state.searchType==="characters")
        axios
          .get(
            `https://www.breakingbadapi.com/api/${this.state.searchType}?name=${this.state.searchInput}`
          )
          .then((res) => this.setState({ data: res.data }))
          .catch((data) => this.setState({ data: [] }));
          // title
        else axios
        .get(
          `https://www.breakingbadapi.com/api/${this.state.searchType}?title=${this.state.searchInput}`
        )
        .then((res) => this.setState({ data: res.data }))
        .catch((data) => this.setState({ data: [] }));
      }
    );
  };
  render() {
    return (
      <>
        <h1>Breaking Bad API</h1>
        <div className="search-box">
          <input
            placeholder="Search"
            onChange={() => this.search()}
            ref={this.input}
          ></input>
          <select
            onChange={() => this.searchTypeSelect()}
            ref={this.searchOption}
          >
            <option value="characters">Characters</option>
            <option value="episodes">Episodes</option>
          </select>
        </div>
        {this.state.data.length === 0 ? (
          <ErrorIn
            message={
              this.state.searchInput.trim() === ""
                ? "Enter Somthing :)"
                : "Error in getting!"
            }
          />
        ) : (
          <Display data={this.state.data} searchType={this.state.searchType} />
        )}
      </>
    );
  }
}

export default App;
