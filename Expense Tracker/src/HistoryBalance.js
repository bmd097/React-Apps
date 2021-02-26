import React, { Component } from 'react';
import HistoryCard from './HistoryCard';

class HistoryBalance extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <section>
                <h3>History</h3>
                <div className="bal-his">
                    {0<this.props.history.length?<HistoryCard 
                                    text={this.props.history[0]["text"]} 
                                    money={this.props.history[0]["money"]} 
                                    type={this.props.history[0]["type"]}/>:""}
                    {1<this.props.history.length?<HistoryCard 
                                    text={this.props.history[1]["text"]} 
                                    money={this.props.history[1]["money"]} 
                                    type={this.props.history[1]["type"]}/>:""}
                    {2<this.props.history.length?<HistoryCard 
                                    text={this.props.history[2]["text"]} 
                                    money={this.props.history[2]["money"]} 
                                    type={this.props.history[2]["type"]}/>:""}
                </div>
                </section>
        );
    }
}

export default HistoryBalance;