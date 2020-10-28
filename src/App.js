import React, { Component } from "react";
import imageCompression from "browser-image-compression";

import "./styles.css";

import { Header } from "./Components/Header/Header.component";
import { Container } from "./Components/Container/Container.component";

export default class App extends Component {

  constructor() {

    super()
    this.state = {
      originalImageLink: '',
      isUpload: false,
      originalImage: '',
      compressedLink: '',
      btnCompressIsClicked: false
    }
  }

  handleOnChange = e => {
    const imageFile = e.target.files[0]

    this.setState({
      isUpload: true,
      originalImage: imageFile,
      originalImageLink: URL.createObjectURL(imageFile)
    });

  }

  changeValue = e => this.setState({ [e.target.name]: e.target.value });

  compress = e => {
    e.preventDefault();

    const options = {
      maxSizeMB: 1,
      maxWidthOrHeight: 500,
      useWebWorker: true
    };

    if (options.maxSizeMB >= this.state.originalImage.size / 1024) {
      alert("Image is too small, can't be Compressed!");
      return 0;
    }

    let output;
    imageCompression(this.state.originalImage, options).then(x => {
      output = x;

      const downloadLink = URL.createObjectURL(output);
      this.setState({
        compressedLink: downloadLink
      });
    });

  }


  render() {
    return (
      <div className="App">
        <Header />
        <Container
          name={this.state.file}
          isUpload={this.state.isUpload}
          handleOnChange={this.handleOnChange}
          image={this.state.originalImageLink}
          compressedLink={this.state.compressedLink}
          compress={this.compress}
        />
      </div>
    );
  }

}
