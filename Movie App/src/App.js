import React, { Component } from "react";
import Movie from "./Movie";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [],
    };
    this.pageNo = 1;
  }

  componentDidMount() {
    this.loadMainResults(this.pageNo);
  }
  loadMainResults(argu) {
    fetch(this.getAPI(argu))
      // We get the API response and receive data in JSON format...
      .then((response) => response.json())
      // ...then we update the users state
      .then((data) =>
        this.setState({
          data: data["results"],
        })
      )
      // Catch any errors we hit and update the app
      .catch(console.log("Failed"));
  }
  getAPI(argu) {
    if (typeof argu === "number")
      return `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=3fd2be6f0c70a2a598f084ddfb75487c&page=${argu}`;
    else
      return `https://api.themoviedb.org/3/search/movie?api_key=3fd2be6f0c70a2a598f084ddfb75487c&query=${argu}`;
  }
  
  render() {
    return (
      <div>
        <nav>
          <h1>Movies App</h1>
          <input
            type="text"
            onKeyPress={(e) =>
              e.code === "Enter" ? this.loadMainResults(e.target.value) : ""
            }
            placeholder="Search"
          ></input>
        </nav>
        <main>
          {this.state.data.map((e, index) => (
            <Movie details={e} key={index} />
          ))}
        </main>
        <footer>
          Movies App | Powered By the MovieDB API | 2020
          <button
            onClick={() => {
              this.pageNo++;
              this.loadMainResults(this.pageNo);
            }}
          >
            Next
          </button>
        </footer>
      </div>
    );
  }
}

export default App;
