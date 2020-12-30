import React, { Component } from 'react';

class Todo extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            <div className='todo'>
                <p>{this.props.name}</p>
                <button onClick={()=>this.props.deleteTodo(this.props.name)}>Delete</button>
            </div>
        );
    }
}

export default Todo;