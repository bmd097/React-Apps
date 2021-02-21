import React, { Component } from 'react';

class MainListProduct extends Component {
    constructor(props) {
        super(props);
        
    }
    addToCart=(id)=>{
        
    }
    render() {
        return (
            <div className="listProduct">
                <img src={this.props.product["photo"]}></img>
                <div className="catagory">
                    <h3>{this.props.product["catagory"]}</h3>
                    <p>{this.props.product["like"]?<i class="fa fa-heart" aria-hidden="true"></i>:<i class="fa fa-heart-o" aria-hidden="true"></i>}</p>
                </div>
                <h1>{this.props.product["name"]}</h1>
                <div className="star">
                    <p>{1<=this.props.product["star"]?<i class="fa fa-star" aria-hidden="true"></i>:<i class="fa fa-star-o" aria-hidden="true"></i>}</p>
                    <p>{2<=this.props.product["star"]?<i class="fa fa-star" aria-hidden="true"></i>:<i class="fa fa-star-o" aria-hidden="true"></i>}</p>
                    <p>{3<=this.props.product["star"]?<i class="fa fa-star" aria-hidden="true"></i>:<i class="fa fa-star-o" aria-hidden="true"></i>}</p>
                    <p>{4<=this.props.product["star"]?<i class="fa fa-star" aria-hidden="true"></i>:<i class="fa fa-star-o" aria-hidden="true"></i>}</p>
                    <p>{5<=this.props.product["star"]?<i class="fa fa-star" aria-hidden="true"></i>:<i class="fa fa-star-o" aria-hidden="true"></i>}</p>
                </div>
                <h2>$ {this.props.product["price"]}</h2>
                <button onClick={()=>this.addToCart(this.props.product["id"])}>BUY</button>
            </div>
        );
    }
}

export default MainListProduct;