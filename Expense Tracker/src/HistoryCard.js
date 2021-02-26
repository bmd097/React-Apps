import React, { Component } from 'react';

class HistoryCard extends Component {
    constructor(props) {
        super(props);
        
    }
    getClassStyle(check){
        if(check) return "bal-his-card deposit";
        return "bal-his-card withdrawl";
    }
    render() {
        return (
            <div className={this.getClassStyle(this.props.type)}>
                <p>{this.props.text}</p>
                <p>{this.props.money>0?'+':""}{this.props.money}</p>
            </div>
        );
    }
}

export default HistoryCard;