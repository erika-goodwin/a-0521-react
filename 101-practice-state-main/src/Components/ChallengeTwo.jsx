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
  // constructor(props) {
  // super(props);
  // this.state = {
  //   arr: [studentList],
  // };
  // this.componentDidMount = this.componentDidMount.bind(this);
  // this.randomize = this.randomize.bind(this);

  state = {
    arr: [],
  };
  //componentDidMount will execute when the page has loaded (this will only run once)
  componentDidMount() {
    //display the student list after 3 seconds
    // this.setState({
    //   arr: this.state.arr,
    // });
    setTimeout(() => {
      this.setState({
        arr: studentList,
      });
    }, 3000);
  }

  //random button handler
  randomize = () => {
    //shuffle the array and set the state

    console.log("clicked Randomize");

    // this.setState((state) => {
    //   let arr = state.arr;
    //   console.log("arr: ", arr);
    //   const shuffle = (arr) => {
    //     for (let i = arr.length - 1; i >= 0; i--) {
    //       const j = Math.floor(Math.random() * (i + 1));
    //       [arr[i], arr[j]] = [arr[j], arr[i]];
    //     }
    //     return arr;
    //   };
    //   console.log("arr shuffle: ", shuffle(arr));

    //   return shuffle(arr);
    // });

    const newArray = this.shuffle(this.state.arr);
    this.setState({
      arr: [...newArray],
    });
  };

  shuffle = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
      const rand = Math.floor(Math.random() * (i + 1));
      [array[i], array[rand]] = [array[rand], array[i]];
    }
    return array;
  };

  render() {
    return (
      <div>
        <h2>Challenge 2</h2>
        <div className="msg">
          <ul>
            {/* display the list of students by iterating through the array */}
            {this.state.arr.map((student, index) => (
              <li key={index}>{student}</li>
            ))}
          </ul>
        </div>
        <button className="btn large" onClick={this.randomize}>
          Randomize
        </button>
      </div>
    );
  }
}
