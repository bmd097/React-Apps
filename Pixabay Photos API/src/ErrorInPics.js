import React, { Component } from 'react';

class ErrorInPics extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div className="display">
                <h5>{this.props.message}</h5>
            </div>
        );
    }
}

export default ErrorInPics;