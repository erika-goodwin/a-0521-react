import React, { Component } from "react";

const studentList = [
  "Randall Malfoy",
  "Kvothe Black",
  "Chun Zorander",
  "Leomund Ridcully",
  "Rary Stibbons",
  "Gandalf Dresden",
  "Zeddicus Doom",
];

export default class ChallengeTwo extends Component {
  //declare the states
  constructor(props) {
    super(props);
    this.state = {
      arr: [studentList],
    };
    this.componentDidMount = this.componentDidMount.bind(this);
    this.randomize = this.randomize.bind(this);
  }
  //componentDidMount will execute when the page has loaded (this will only run once)
  componentDidMount() {
    //display the student list after 3 seconds
    this.setState({
      arr: this.state.arr,
    });
  }

  //random button handler
  randomize = () => {
    //shuffle the array and set the state

    console.log("clicked Randomize");

    this.setState((state) => {
      let arr = state.arr;
      console.log("arr: ", arr);
      const shuffle = (arr) => {
        for (let i = arr.length - 1; i >= 0; i--) {
          const j = Math.floor(Math.random() * (i + 1));
          [arr[i], arr[j]] = [arr[j], arr[i]];
        }
        return arr;
      };
      console.log("arr shuffle: ", shuffle(arr));

      return shuffle(arr);
    });
  };

  render() {
    return (
      <div>
        <h2>Challenge 2</h2>
        <div className="msg">
          <ul>
            {/* display the list of students by iterating through the array */}
            {this.state.arr}
          </ul>
        </div>
        <button className="btn large" onClick={this.randomize}>
          Randomize
        </button>
      </div>
    );
  }
}
