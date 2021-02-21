import React, { Component } from "react";

class HomeScreenCarausal extends Component {
  constructor(props) {
    super(props);
    this.check = 1;
    this.pic = React.createRef();
  }
  changePic = (no) => {
    if (no === 1)
      this.pic.current.src = `https://previews.123rf.com/images/vectorgift/vectorgift1604/vectorgift160400007/55410554-online-shopping-concept-with-vector-icons-and-elements-online-shopping-banner-for-website-header-adv.jpg`;
    if (no === 2)
      this.pic.current.src = `https://www.designcuts.com/wp-content/uploads/2018/09/Shopping-Bag-Mockup-Set-cover.jpg`;
    if (no === 3)
      this.pic.current.src = `https://www.decolore.net/wp-content/uploads/2017/04/shopping-bag-psd-mockup-templates-cover-2.jpg`;
    this.check = no;
  };
  openSite = () => {
    if (this.check == 1) window.open("www.google.com");
    else if (this.check == 2) window.open("www.apple.com");
    else window.open("www.microsoft.com");
  };
  render() {
    return (
      <div className="home-screen-carosal">
        <img
          src="https://previews.123rf.com/images/vectorgift/vectorgift1604/vectorgift160400007/55410554-online-shopping-concept-with-vector-icons-and-elements-online-shopping-banner-for-website-header-adv.jpg"
          ref={this.pic}
          onClick={() => this.openSite()}
        ></img>
        <div>
          <div onClick={() => this.changePic(1)}></div>
          <div onClick={() => this.changePic(2)}></div>
          <div onClick={() => this.changePic(3)}></div>
        </div>
      </div>
    );
  }
}

export default HomeScreenCarausal;
