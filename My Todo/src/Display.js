import React, { Component } from 'react';
import Todo from './Todo';

class Display extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div className='display'>
                {this.props.data.map((e,index)=><Todo name={e.name} deleteTodo={this.props.deleteTodo} key={index}/>)}
            </div>
        );
    }
}

export default Display;