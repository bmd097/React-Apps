import React, { Component, createRef } from 'react';
import './App.css';
import Message from './Message';
import firebase from "firebase/app";


class App extends Component {
  constructor(props) {
    super(props);
    this.inputText=createRef();
    this.state={
      products:[]
    } 
  }
  chatting=()=>{
    firebase.firestore().collection('messages').add({
      message:this.inputText.current.value
    }).then(doc=>console.log("ADDED")).catch(e=>"FAILED");
  }
  componentDidMount=()=> {
    firebase.firestore().collection('messages').onSnapshot(snapshot=>{
      const products=snapshot.docs.map(doc=>{
        return doc.data();
      }).reverse();
      this.setState({products});
    })
  }
  
  render() {
    return (
      <div className="App">
        <h1>CHAT APP</h1>
        <div className="display">
            {this.state.products.map((val,i)=><Message message={val} index={i}/>)}
        </div>
        <div className="text">
            <input type="text" placeholder="Enter your chat? Hello You!" ref={this.inputText}></input>
            <button onClick={()=>this.chatting()}>CHAT!</button>
        </div>
      </div>
    );
  }
}

export default App; 