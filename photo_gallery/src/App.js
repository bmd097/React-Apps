import React, { Component } from 'react';

class App extends Component {
    constructor(props) {
        super(props);
        this.slider_buttons=React.createRef();
        this.slider=React.createRef();
    }
    componentDidMount() {
        let curr_button=this.slider_buttons.current.children[0];
        let curr_pic=this.slider.current.children[0];
        for(let i=0;i<this.slider.current.children.length;i++){
            this.slider_buttons.current.children[i].addEventListener('click',(e)=>{
                curr_button.className="";
                curr_button=e.target;
                curr_button.classList.add('active');
                curr_pic.style.transition="none";
                curr_pic.className="";
                curr_pic.style.opacity="0";
                curr_pic=this.slider.current.children[i];
                curr_pic.classList.add("img-active");
                let id=setTimeout(()=>{
                    clearTimeout(id);
                    curr_pic.style.transition="all ease-in-out 0.2s";
                    curr_pic.style.opacity="1";
                },50);
            });
        }
        curr_pic.style.opacity=1;
    }
    
    render() {
        return (
            <div className="img-slider">
                <div className="slider" ref={this.slider}>
                    <img src="https://source.unsplash.com/random/1920x1080" style={{"--i":"0"}} className="img-active"></img>
                    <img src="https://source.unsplash.com/random/1919x1079" style={{"--i":"1"}}></img>
                    <img src="https://source.unsplash.com/random/1918x1078" style={{"--i":"2"}}></img>
                    <img src="https://source.unsplash.com/random/1917x1077" style={{"--i":"3"}}></img>
                    {/* className="img-active" */}
                </div>
                <div className="slider-buttons" ref={this.slider_buttons}>
                    <div className="active"></div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>
            </div>
        );
    }
}

export default App;