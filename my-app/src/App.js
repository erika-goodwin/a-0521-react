// import logo from "./logo.svg";
import "./App.css";
import SampleState from "./SampleState";
import SectionA from "./Section/SectionA";
import SectionB from "./Section/SectionB";
import SectionC from "./Section/SectionC";
import Testcomp from "./Testcomp";

function App() {
  return (
    <div className="App">
      <Testcomp />
      <SampleState />
      <hr />
      <SectionA />
      <SectionB />
      <SectionC />
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
