import React, { Component } from 'react';

class BalanceDisplay extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render=()=> {
        return (
            <section className="bal-details">
            <p>YOUR BALANCE</p>
            <h2>${this.props.bal}</h2>
            <div className="bal-cards">
              <div className="card">
                <p>INCOME</p>
                <p>${this.props.income}</p>
              </div>
              <div className="card">
                <p>EXPENSE</p>
                <p>${this.props.expense}</p>
              </div>
            </div>
          </section>
        );
    }
}

export default BalanceDisplay;