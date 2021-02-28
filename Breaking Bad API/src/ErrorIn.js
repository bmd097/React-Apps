import React, { Component } from 'react';

class ErrorIn extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div className="Error">
                {this.props.message}
            </div>
        );
    }
}

export default ErrorIn;