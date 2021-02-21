import React, { Component } from 'react';
import "./mainList.css"
import MainListProduct from './MainListProduct';

class MainList extends Component {
    constructor(props) {
        super(props);
        console.log(this.props.products);
    }
    
    render() {
        return (
            <div className="mainList">
                {this.props.products.map(product=><MainListProduct product={product}/>)}
            </div>
        );
    }
}

export default MainList;