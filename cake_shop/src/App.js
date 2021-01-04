import React, { Component } from 'react';
import './App.css';
import store from './mainState'

class App extends Component {
  constructor(props) {
    super(props);
    this.state=store;
  }
  checkAvailability(no){
      switch(no){
        case 0:
          if(this.state.cakeNo>0) return true;
        break;
        case 1:
          if(this.state.iceCreamNo>0) return true;
        break;
        case 2:
          if(this.state.burger>0) return true;
        break;
        case 3:
          if(this.state.pastryNo>0) return true;
        break;
        default: break;
      }
      return false;
  }
  buyCake(no){
    this.setState(prev=>{
      let newState={
        ...prev
      }
      switch(no){
        case 0:
          newState.cakeNo--;
        break;
        case 1:
          newState.iceCreamNo--;
        break;
        case 2:
          newState.burger--;
        break;
        case 3:
          newState.pastryNo--;
        break;
        default:
          break;
      }
      return newState;
    });
  }
  
  render() {
    return (
      <div className="main">
        <h1>Cake Shop</h1>
        <div className="display">
          <div className="item">
              <img src="./assets/cake.jpg"></img>
              <p>{this.state.cakeNo}</p>
              <button className={this.checkAvailability(0)?"btn-active":"btn-inactive"}
              onClick={()=>this.buyCake(0)}>$5 BUY</button>
          </div>
          <div className="item">
              <img src="./assets/iceCream.jpg"></img>
              <p>{this.state.iceCreamNo}</p>
              <button className={this.checkAvailability(1)?"btn-active":"btn-inactive"}
              onClick={()=>this.buyCake(1)}>$10 BUY</button>
          </div>
          <div className="item">
              <img src="./assets/burger.jpg"></img>
              <p>{this.state.burger}</p>
              <button className={this.checkAvailability(2)?"btn-active":"btn-inactive"}
              onClick={()=>this.buyCake(2)}>$40 BUY</button>
          </div>
          <div className="item">
              <img src="./assets/pastry.jpg"></img>
              <p>{this.state.pastryNo}</p>
              <button className={this.checkAvailability(3)?"btn-active":"btn-inactive"}
              onClick={()=>this.buyCake(3)}>$10 BUY</button>
          </div>
        </div>
      </div>
    );
  }
}

export default App;