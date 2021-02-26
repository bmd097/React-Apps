import React, { Component } from 'react';

class AddTransaction extends Component {
  constructor(props) {
    super(props);
    this.text=React.createRef();
    this.number=React.createRef();
  }
  getNumber=()=>{
    let input=this.number.current.value;
    let number;
    if(input[0]==="-") 
      number=-parseInt(input.substring(1));
    else if(input[0]==="+")
      number=parseInt(input.substring(1));
    else number=parseInt(input);
    if(isNaN(number)) return false;
    return number;
  }
    render() {
        return (
            <section>
          <h3>Add new transaction</h3>
          <div className="transactions-display">
            <div className="transaction-card">
              <p>Text</p>
              <input placeholder="Enter text..." ref={this.text}></input>
            </div>
            <div className="transaction-card">
              <p>Amount</p>
              <input placeholder="Enter amount..." ref={this.number}></input>
            </div>
          </div>
          <button onClick={()=>{
            if(this.number.current.value.trim()==="") return;
            if(this.text.current.value.trim()==="") return;
            let number=this.getNumber();
            if(number===false) return;
            this.props.addTransaction(this.text.current.value,number);
            this.number.current.value="";
            this.text.current.value="";
          }}>Add transaction</button>
        </section>      
        );
    }
}

export default AddTransaction;