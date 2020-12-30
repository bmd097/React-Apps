import React, { Component } from 'react';

class App extends Component {
  render() {
    return (
      <>
        <nav>
          <div className='logo'>
            <img src='/assets/logo.png'></img>
            <h1>Hotel JIGZAG</h1>
          </div>
          <div className='nav-user'>
            <img src='https://www.flaticon.com/svg/static/icons/svg/64/64572.svg'></img>
            <p>Guest</p>
          </div>
        </nav>
        <section className="home">
          <h1>Enjoy an awessome night in your Trip</h1>
          <button>Book A Room</button>
        </section>
        <section className="services">
          <h1>Services</h1>
          <div className='services-display'>
          <div className="service-card">
                <img src='/assets/party.jpg'></img>
                <h1>Party</h1>
              </div>
              <div className="service-card">
                <img src='/assets/food.jpg'></img>
                <h1>Restaurant</h1>
              </div>
              <div className="service-card">
                <img src='/assets/pool.jpg'></img>
                <h1>Pool Party</h1>
              </div>
          </div>
        </section>
        <section className="offers">
          <h1>Offers</h1>
          <div className='offers-display'>
              <div className="offer-card">
                  30% Off In Party Events Upto 1/5/2022
              </div>
              <div className="offer-card">
                  20% Off In Group Events Upto 1/7/2022
              </div>
              <div className="offer-card">
                  10% Off In Wedding Events Upto 1/1/2022
              </div>
          </div>
        </section>
        <footer>
          <div className="logo">
            <img src='/assets/logo.png'></img>
          </div>
          <div className="foot-text">
            <a href='https://google.com'><i class="fa fa-book" aria-hidden="true"></i> Bookings</a>
            <a href='https://google.com'><i class="fa fa-star" aria-hidden="true"></i> Party Nights</a>
            <a href='https://google.com'><i class="fa fa-moon-o" aria-hidden="true"></i> Pool Party</a>
            <a href='https://google.com'><i class="fa fa-cutlery" aria-hidden="true"></i> Restaurant</a>
          </div>
        </footer>
      </>
    );
  }
}

export default App;
