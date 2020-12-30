import React, { Component } from 'react';
import Navbar from './Navbar';
import Display from './Display';
import Footer from './Footer';


class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      data:[
        {
          name:"Mohan"
        }
      ]
    }
  }
  deleteTodo=(Username)=>{
    this.setState({
      data:this.state.data.filter(e=>e.name!==Username)
    });
  }
  addTodo=(Username)=>{
    this.state.data.push({name:Username});
    this.setState({
      data:this.state.data
    });
  }
  render() {
    return (
      <div className="maintodo">
        <Navbar addTodo={this.addTodo}/>
        <Display data={this.state.data} deleteTodo={this.deleteTodo}/>
        <Footer/>
      </div>
    );
  }
}

export default App;