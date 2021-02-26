import React, { Component } from 'react';

class Form extends Component {
    constructor(props) {
        super(props);
        this.attributes=[];
        for(let i=0;i<this.props.attributes.length;i++){
            this.attributes[i]=React.createRef();
        }
    }
    
    render() {
        return (
            <div className="form">
            <h1>Form 1</h1>
            {this.props.attributes.map((e,i)=>{
                return <>
                    <p>{e}</p>
                    <input value={this.props.getValueAttribute(e)} placeholder={"Enter your "+e} ref={this.attributes[i]} onChange={()=>this.props.handleChange(e,this.attributes[i].current.value)}></input>
                </>;
            })}
            <div className="buttons">
                {this.props.first?"":<button onClick={()=>this.props.prev()}>prev</button>}
                {this.props.last?<button onClick={()=>this.props.submitForm()}>submit</button>:<button onClick={()=>this.props.next()}>next</button>}
            </div>
            </div>
        );
    }
}

export default Form;