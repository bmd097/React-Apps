import React, { Component } from 'react';

class Episode extends Component {
    constructor(props) {
        super(props);
        
    }
    
    render() {
        return (
            <div  className="episode">
                <p>{this.props.data["title"]}</p>
                <p>{this.props.data["air_date"]}</p>
                <p>EPISODE: {this.props.data["episode"]}</p>
            </div>
        );
    }
}

export default Episode;