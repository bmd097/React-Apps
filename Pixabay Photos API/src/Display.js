import React, { Component } from 'react';
import Pic from './Pic';

class Display extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="display">
                {this.props.images.map(pic=><Pic pic={pic} showPhoto={this.props.showPhoto}/>)}
            </div>
        );
    }
}

export default Display;