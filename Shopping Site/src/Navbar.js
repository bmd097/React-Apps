import React, { Component } from "react";

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.categoriesSubMenu = React.createRef();
    this.productsSubMenu = React.createRef();
  }
  showCatagoriesSubMenu = () => {
    if (this.productsSubMenu.current.style.opacity == 1) {
      this.productsSubMenu.current.style.opacity = 0;
      this.productsSubMenu.current.style.transform = "scale(0)";
    }
    if (this.categoriesSubMenu.current.style.opacity == 0) {
      this.categoriesSubMenu.current.style.opacity = 1;
      this.categoriesSubMenu.current.style.transform = "scale(1)";
    } else {
      this.categoriesSubMenu.current.style.opacity = 0;
      this.categoriesSubMenu.current.style.transform = "scale(0)";
    }
  };
  showProductsSubMenu = () => {
    if (this.categoriesSubMenu.current.style.opacity == 1) {
      this.categoriesSubMenu.current.style.opacity = 0;
      this.categoriesSubMenu.current.style.transform = "scale(0)";
    }
    if (this.productsSubMenu.current.style.opacity == 0) {
      this.productsSubMenu.current.style.opacity = 1;
      this.productsSubMenu.current.style.transform = "scale(1)";
    } else {
      this.productsSubMenu.current.style.opacity = 0;
      this.productsSubMenu.current.style.transform = "scale(0)";
    }
  };
  render() {
    return (
      <nav>
        <div className="part1">
          <p>FREE RETURNS, STANDARD SHIPPING ORDERS $99+</p>
          <div className="part1-links">
            <a href="www.google.com">Track Order</a>
            <a href="#">About</a>
            <a href="#">Our Stories</a>
            <a href="#">Blog</a>
            <a href="#">Contact</a>
            <a href="#">Help & FAQs</a>
            <a href="#">
              <i class="fa fa-twitter-square" aria-hidden="true"></i>
            </a>
            <a href="#">
              <i class="fa fa-instagram" aria-hidden="true"></i>
            </a>
            <a href="#">
              <i class="fa fa-facebook-official" aria-hidden="true"></i>
            </a>
          </div>
        </div>
        <div className="part2">
          <div className="logo">
            <img src="images/brands/logo.jpeg"></img>
          </div>
          <div className="search-bar">
            <input placeholder="Search In All Catagories"></input>
            <p className="search">
              <i class="fa fa-search" aria-hidden="true"></i>
            </p>
          </div>
          <div className="ph-no">
            <p>
              <i class="fa fa-phone" aria-hidden="true"></i> 587459874
            </p>
          </div>
          <div className="part2-links">
            <a href="#">
              <i class="fa fa-user" aria-hidden="true"></i>
            </a>
            <a href="#">
              <i class="fa fa-heart-o" aria-hidden="true"></i>
            </a>
            <p>
              <i class="fa fa-shopping-cart" aria-hidden="true"></i>
            </p>
          </div>
        </div>
        <div className="part3">
          <p className="active">HOME</p>
          <p onClick={() => this.showCatagoriesSubMenu()}>
            CATAGORIES&nbsp;&nbsp;
            <i class="fa fa-caret-down" aria-hidden="true"></i>
          </p>
          <p onClick={() => this.showProductsSubMenu()}>
            PRODUCTS&nbsp;&nbsp;
            <i class="fa fa-caret-down" aria-hidden="true"></i>
          </p>
          <p>PAGES</p>
          <p>BLOG</p>
          <p>ABOUT US</p>
          <div
            className="sub-menu catagories-link"
            ref={this.categoriesSubMenu}
          >
            <div className="links">
              <h1>TITLE 1</h1>
              <a href="#">Product Link 0</a>
              <a href="#">Product Link 1</a>
              <a href="#">Product Link 2</a>
              <a href="#">Product Link 3</a>
              <a href="#">Product Link 4</a>
            </div>
            <div className="links">
              <h1>TITLE 2</h1>
              <a href="#">Product Link 0</a>
              <a href="#">Product Link 1</a>
              <a href="#">Product Link 2</a>
              <a href="#">Product Link 3</a>
              <a href="#">Product Link 4</a>
            </div>
            <img src="https://discovery.sndimg.com/content/dam/images/discovery/editorial/Curiosity/2020/2/18/GettyImages-901630488.jpg.rend.hgtvcom.476.476.suffix/1582654574644.jpeg"></img>
          </div>
          <div className="sub-menu products-link" ref={this.productsSubMenu}>
            <div className="links">
              <h1>TITLE 1</h1>
              <a href="#">Product Link 0</a>
              <a href="#">Product Link 1</a>
              <a href="#">Product Link 2</a>
              <a href="#">Product Link 3</a>
              <a href="#">Product Link 4</a>
            </div>
            <img src="https://5.imimg.com/data5/GS/XZ/DR/SELLER-84968335/sb-92-500x500.png"></img>
          </div>
        </div>
        <div className="part4">
          <div className="part4-part">
            <p>
              <i class="fa fa-truck" aria-hidden="true"></i>
            </p>
            <div>
              <p>FREE SHIPPING & RETURN</p>
              <p>Free shipping on all orders over $99</p>
            </div>
          </div>
          <div className="part4-part">
            <p>
              <i class="fa fa-usd" aria-hidden="true"></i>
            </p>
            <div>
              <p>MONEY BACK GUARANTEE</p>
              <p>100% money back guarantee</p>
            </div>
          </div>
          <div className="part4-part">
            <p>
              <i class="fa fa-check-circle-o" aria-hidden="true"></i>
            </p>
            <div>
              <p>ONLINE SUPPORT 24/7</p>
              <p>Ask your queries anytime</p>
            </div>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
