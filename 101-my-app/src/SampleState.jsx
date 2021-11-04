import React, { Component } from "react";

export default class SampleState extends Component {
  state = {
    brand: "Ford",
  };

  updateCar = () => {
    //  console.log('clicked')
    //this is bad
    // this.state={
    // brand: 'Tesla
    // }

    this.setState({
      brand: "Tesla",
    });
  };
  render() {
    return (
      <h1>
        <hr />
        My Car: {this.state.brand} <br />
        <button onClick={this.updateCar}> click to change</button>
      </h1>
    );
  }
}
