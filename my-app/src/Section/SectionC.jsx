import React, { Component } from "react";

class SectionC extends Component {
  state = {
    arr: ["Apple", "Orange", "Banana", "Pear", "Grape", "Pomelo"],
    count: 0,
    index: 0,
  };

  componentDidMount() {
    this.setState({
      text: this.state.arr[this.state.index],
      index: this.state.index + 1,
    });

    setInterval(() => {
      this.state.index >= 5 && this.setState({ index: 0 });
      this.setState({
        text: this.state.arr[this.state.index],
        index: this.state.index + 1,
      });
    }, 5000);

    setInterval(() => {
      this.state.count >= 5 && this.setState({ count: 0 });
      this.setState({
        count: this.state.count + 1,
      });
    }, 1000);
  }

  render() {
    return (
      <div>
        <h1>101.c</h1>
        <div className="msg">
          {this.state.text} . . . {this.state.count}
        </div>
      </div>
    );
  }
}

export default SectionC;
