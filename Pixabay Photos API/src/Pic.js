import React, { Component } from 'react';

class Pic extends Component {
    constructor(props) {
        super(props);
        
    }
    render() {
        return (
            <div className="pic">
                <img src={this.props.pic["webformatURL"]}></img>
                <div className="pic-details">
                    <div>
                        <img src={this.props.pic["userImageURL"]}></img>
                        <p>{this.props.pic["user"]}</p>
                    </div>
                    <p className="dwn" onClick={()=>this.props.showPhoto(this.props.pic["webformatURL"])}><i class="fa fa-search-plus" aria-hidden="true"></i></p>
                </div>
            </div>
        );
    }
}

export default Pic;