import React, { Component } from "react";
import "./App.css";
import Display from "./Display";
import ErrorInPics from "./ErrorInPics";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchText: "",
      amount: 15,
      apiUrl: "https://pixabay.com/api",
      aplKey: "20389411cc186",
      images: [],
    };
    this.noOfItems = React.createRef();
    this.inputText = React.createRef();
    this.photoViewerPic = React.createRef();
  }
  setNoOfPhotos = () => {
    this.setState({
      amount: this.noOfItems.current.value,
    });
  };
  displayPics = () => {
    if(this.inputText.current.value.trim()===""){
      this.setState({ images: [],searchText:"" });
      return;
    }
    this.setState({ searchText: this.inputText.current.value }, () => {
      axios
        .get(
          `${this.state.apiUrl}/?key=${this.state.aplKey}&q=${this.state.searchText}&image_type=photo&per_page=${this.state.amount}&orientation=horizontal`
        )
        .then((res) => this.setState({ images: res.data.hits }));
    });
  };
  // photo-viewer methods
  showPhoto = (url) => {
    this.photoViewerPic.current.src = url;
    let photoViewer = document.getElementById("photo-viewer");
    photoViewer.style.display = "flex";
    setTimeout(() => {
      photoViewer.style.opacity = 1;
    }, 100);
    setTimeout(() => {
      this.photoViewerPic.current.style.width = "75%";
      this.photoViewerPic.current.style.height = "85%";
      this.photoViewerPic.current.style.opacity = 1;
    }, 150);
  };
  hidePhoto = () => {
    let photoViewer = document.getElementById("photo-viewer");
    this.photoViewerPic.current.style.width = "35%";
    this.photoViewerPic.current.style.height = "45%";
    this.photoViewerPic.current.style.opacity = 0;
    setTimeout(() => {
      photoViewer.style.opacity = 0;
    }, 300);
    setTimeout(() => {
      photoViewer.style.display = "none";
    }, 600);
  };
  render() {
    return (
      <>
        <h1>
          <span>Pixabay Photos API</span>
        </h1>
        <div className="input-form">
          <input
            placeholder="Enter the image name!"
            ref={this.inputText}
            onChange={() => this.displayPics()}
          ></input>
          <select ref={this.noOfItems} onChange={() => this.setNoOfPhotos()}>
            <option value="15">15</option>
            <option value="9">9</option>
            <option value="3">3</option>
          </select>
        </div>
        {this.state.images.length > 0 ? (
          <Display images={this.state.images} showPhoto={this.showPhoto} />
        ) : (
          <ErrorInPics message={this.state.searchText.trim()===''?"Type Something :)":"Some Error Occured!"}/>
        )}
        <div id="photo-viewer" onClick={() => this.hidePhoto()}>
          <img ref={this.photoViewerPic}></img>
        </div>
      </>
    );
  }
}

export default App;
