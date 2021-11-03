import React, { Component } from "react";

export default class SectionB extends Component {
  state = {
    text: "Click the button",
    btnText: "Click Me!",
    status: true,
  };

  btnClick = () => {
    this.state.status
      ? this.setState({
          text: "She loves me not",
          status: false,
        })
      : this.setState({
          text: " She loves me",
          status: true,
        });
  };

  render() {
    return (
      <div>
        <h1>101</h1>
        <div className="msg">{this.state.text}</div>
        <button className="btn" onClick={this.btnClick}>
          {this.state.btnText}
        </button>
      </div>
    );
  }
}
