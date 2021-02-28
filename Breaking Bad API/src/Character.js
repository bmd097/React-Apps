import React, { Component } from 'react';

class Character extends Component {
    constructor(props) {
        super(props);
    }
    
    render() {
        return (
            <div className="character">
                <img src={this.props.data["img"]}></img>
                <div className="details">
                    <p>{this.props.data["name"]}</p>
                    {this.props.data["birthday"]!=='Unknown'?<p>{this.props.data["birthday"]}</p>:null}
                    <p>{this.props.data["status"]}</p>
                    <p>NK: {this.props.data["nickname"]}</p>
                    <p>{this.props.data["category"]}</p>
                </div>
            </div>
        );
    }
}

export default Character;