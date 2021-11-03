import React, { Component } from "react";
//import images
import ImageLeft from "../Assets/look-left.jpeg";
import ImageRight from "../Assets/look-right.jpeg";

class ChallengeOne extends Component {
  //declare the state here
  state = {
    image: ImageLeft,
    alt: "left",
    status: true,
  };

  //click left/right button handler goes here

  clickHandlerLeft = () => {
    console.log("LEFT clicked");
    if (this.state.status) {
      this.setState({
        image: ImageRight,
        alt: "right",
        status: false,
      });
    }
  };

  clickHandlerRight = () => {
    console.log("RIGHT clicked");
    if (this.state.status === false) {
      this.setState({
        image: ImageLeft,
        alt: "left",
        status: true,
      });
    }
  };

  render() {
    return (
      <div>
        <h2>Challenge 1</h2>
        <div className="msg">
          <img className="ch1" src={this.state.image} alt={this.state.alt} />
        </div>

        <button className="btn" onClick={this.clickHandlerLeft}>
          ⭠
        </button>
        <button className="btn" onClick={this.clickHandlerRight}>
          ⭢
        </button>
      </div>
    );
  }
}

export default ChallengeOne;
