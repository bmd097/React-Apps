import React, { Component } from "react";
import "./App.css";
import Form from "./Form";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      step: 0,
      name: null,
      age: null,
      email: null,
      number: null,
      title: null,
    };
  }
  submitForm = () => {
    // Submit form
    console.log("name ", this.state.name);
    console.log("age ", this.state.age);
    console.log("email ", this.state.email);
    console.log("number ", this.state.number);
    console.log("title ", this.state.title);
  };
  next = () => {
    let step = this.state.step;
    this.setState({
      step: step + 1,
    });
  };
  prev = () => {
    let step = this.state.step;
    this.setState({
      step: step - 1,
    });
  };
  handleChange = (key, value) => {
    this.setState({
      [key]: value,
    });
  };
  getValueAttribute = (key) => {
    return this.state[key];
  };
  render() {
    return (
      <div className="App">
        {this.state.step == 0 ? (
          <Form
            getValueAttribute={this.getValueAttribute}
            attributes={["name", "age"]}
            first={true}
            last={false}
            next={this.next}
            handleChange={this.handleChange}
          />
        ) : (
          ""
        )}
        {this.state.step == 1 ? (
          <Form
            getValueAttribute={this.getValueAttribute}
            attributes={["email", "number"]}
            first={false}
            last={false}
            prev={this.prev}
            next={this.next}
            handleChange={this.handleChange}
          />
        ) : (
          ""
        )}
        {this.state.step == 2 ? (
          <Form
            getValueAttribute={this.getValueAttribute}
            attributes={["title"]}
            first={false}
            last={true}
            submitForm={this.submitForm}
            prev={this.prev}
            next={this.next}
            handleChange={this.handleChange}
          />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
