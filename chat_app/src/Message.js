import React, { Component } from 'react';

class Message extends Component {
    constructor(props) {
        super(props);
        console.log(props);
    }
    
    render() {
        return (
            <div className="message">
                <div className={this.props.index%2===0?"left":"right"}>
                    {this.props.message.message}
                </div>
            </div>
        );
    }
}

export default Message;