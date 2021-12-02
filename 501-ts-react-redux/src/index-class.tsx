import React, { Component } from "react";
import ReactDOM from "react-dom";

interface AppProps {
  color: string;
}

interface AppState {
  counter: number;
}

class App extends Component<AppProps, AppState> {
  //Case (1)
  state = {counter: 0}

  //Case(2)
//   constructor(props: AppProps) {
//     super(props);

//     this.state = { counter: 0 };
//   }

  onIncrement = (): void => this.setState({ counter: this.state.counter + 1 });
  onDecrement = (): void => this.setState({ counter: this.state.counter - 1 });

  render() {
    return (
      <div>
        <div>{this.props.color}</div>
        <hr />
        <button onClick={this.onIncrement}>Increment</button>
        <button onClick={this.onDecrement}>Decrement</button>
        <div>{this.state.counter}</div>
      </div>
    );
  }
}
ReactDOM.render(<App color="red" />, document.getElementById("root"));
