import React, { Component } from 'react';

class About extends Component {
    constructor(props) {
        super(props);
        this.input=React.createRef();
    }
    newsSubscribe=()=>{
        if(this.input.current.value==="") alert("Enter First!")
        else alert("Thank You!");
    }
    render() {
        return (
            <div className="about">
                <div className="part-one">
                    <div className="links">
                        <h1>CONTACT INFO </h1>
                        <h3>ADDRESS :</h3>
                        <p>1234 Street Name, Viva</p>
                        <h3>PHONE :</h3>
                        <p>5874589625</p>
                        <h3>EMAIL :</h3>
                        <p>bmd584@hvhv.com</p>
                        <h3>WORKING DAYS/HOURS :</h3>
                        <p>Mon - Sun 9:00-8:00</p>
                        <div className="social-links">
                            <a href="#"><i class="fa fa-twitter-square" aria-hidden="true"></i></a>
                            <a href="#"><i class="fa fa-instagram" aria-hidden="true"></i></a>
                            <a href="#"><i class="fa fa-facebook-official" aria-hidden="true"></i></a>
                        </div>
                    </div>
                    <div>
                        <div>
                            <div className="links">
                                <h1>SUBSCRIBE NEWSLETTER</h1>
                                <p>Get all the latest information on Events, Sales & Offers.</p>
                                <p>Sign Up for Newletter Today!</p>
                            </div>
                            <div className="search-bar">
                                <input placeholder="Email Address" ref={this.input}></input>
                                <p onClick={()=>this.newsSubscribe()}>SUBSCRIBE</p>
                            </div>
                        </div>
                        <div className="sublink">
                            <div className="links">
                                <h1>CUSTOMER SERVICE</h1>
                                <p>About Us</p>
                                <p>Contact Us</p>
                                <p>My Account</p>
                                <p>Orders History</p>
                                <p>Log In</p>
                            </div>
                            <div className="links">
                                <h1>ABOUT US</h1>
                                <p>1st Fully Working Ajax Theme</p>
                                <p>33 Unique Shop Layouts</p>
                                <p>Powerful Admin Panel</p>
                                <p>Mobile & Retina Optimised</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="part-two">
                    <p>VEXA E-COMMERCE 2020</p>
                    <div className="card-money">
                        <img src="images/cards/visa.png"></img>
                        <img src="images/cards/stripe-logo-blue.png"></img>
                        <img src="images/cards/paypal.jpg"></img>
                    </div>
                </div>
            </div>
        );
    }
}

export default About;