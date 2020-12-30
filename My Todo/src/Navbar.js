import React, { Component } from 'react';

class Navbar extends Component {
    constructor(props) {
        super(props);
        
    }
    addToTodo=()=>{
        let input=document.querySelector('.navbar input');
        if(input.value==='') return;
        this.props.addTodo(input.value);
        input.value="";
    }
    
    render() {
        return (
            <div className='navbar'>
                <input type="text" placeholder="Enter your Todo"></input>
                <button onClick={this.addToTodo}>ADD</button>
            </div>
        );
    }
}


export default Navbar;