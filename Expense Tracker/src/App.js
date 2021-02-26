import React, { Component } from 'react';
import AddTransaction from './AddTransaction';
import './App.css';
import BalanceDisplay from './BalanceDisplay';
import HistoryBalance from './HistoryBalance';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      bal:260.00,
      income: 500.00,
      expense: 240.00,
      history : [
        {
          "text":"Cash",
          "money":500,
          "type":true // true->deposit 
        },
        {
          "text":"Book",
          "money":-40,
          "type":false // true->deposit 
        },
        {
          "text":"Camera",
          "money":-200,
          "type":false // true->deposit 
        }
      ]
    };
  }
  addTransaction=(text,amount)=>{
    let prev=this.state;
    let bal=prev.bal;
    let income=prev.income;
    let expense=prev.expense;
    bal+=amount;
    if(amount>0) income+=amount;
    if(amount<0) expense-=amount;
    this.setState({
      bal:bal,
      income:income,
      expense:expense,
      history:[{
        "text":text,
        "money":amount,
        "type":(amount>0)?true:false
      },...prev.history]
    });
  }
  
  render() {
    return (
      <div className="App">
        <h1>Expense Tracker</h1>
        <BalanceDisplay bal={this.state.bal} income={this.state.income} expense={this.state.expense}/>
        <HistoryBalance history={this.state.history}/>
        <AddTransaction addTransaction={this.addTransaction}/>
      </div>
        
    );
  }
}

export default App;