import React, { Component } from 'react';
import About from './About';
import "./App.css";
import HomeScreenCarausal from './HomeScreenCarausal';
import MainList from './MainList';
import Navbar from './Navbar';

class App extends Component {
  constructor(props) {
    super(props);
    this.popUp=React.createRef();
  }
  closePopUp=()=>{
    this.popUp.current.style.display="none";
  }
  render() {
    return (
      <>
        <div className="pop-up-main" ref={this.popUp}>
          <p>Get upto <b>40% OFF</b> NEW-SEASON-STYLES </p>
          <span>MEN</span>
          <span>WOMEN</span>
          <p>*Limited Time only</p>
          <p className="close-btn" onClick={()=>this.closePopUp()}><i class="fa fa-times" aria-hidden="true"></i></p>
        </div>
        <div className="container">
          <Navbar/>
          <HomeScreenCarausal/>
          <MainList products={this.props.products}/>

          <section className="random-info">
            <div>
              <div><p>SALE</p></div>
              <h1>ALL NEW FASHION ITEMS UPTO 70% OFF</h1>
            </div>
            <div onMouseOut={()=>{window.open("ww.google.com")}} className="btn">
              VIEW SALE
            </div>
          </section>

          <section className="perks">
            <div className="perk-card">
                <p><i class="fa fa-headphones" aria-hidden="true"></i></p>
                <h1>CUSTOMER SUPPORT</h1>
                <h3>Need Assistance!</h3>
                <p>
                  We really care about you and your website as much as you do. Purchasing this or any other theme from BMD you get nothing free.
                </p>
            </div>
            <div className="perk-card">
                <p><i class="fa fa-credit-card" aria-hidden="true"></i></p>
                <h1>SECURED PAYMENT</h1>
                <h3>Safe & Fast</h3>
                <p>
                  With Me you can customize the layout, colors and styles within only a few minutes. Start creating an amazing website right now!
                </p>
            </div>
            <div className="perk-card">
                <p><i class="fa fa-arrow-left" aria-hidden="true"></i></p>
                <h1>RETURNS</h1>
                <h3>Easy & Free</h3>
                <p>
                  I have very powerful admin features to help customer to build their own shop in minutes without any special skills in web development.
                </p>
            </div>
          </section>

          <section className="brands">
            <img src="images/brands/brand0.jpg"></img>
            <img src="images/brands/brand1.png"></img>
            <img src="images/brands/brand2.png"></img>
            <img src="images/brands/brand3.png"></img>
            <img src="images/brands/brand4.png"></img>
            <img src="images/brands/brand5.jpg"></img>
          </section>
          
          <About/>
        </div>
      </>
    );
  }
}

export default App;