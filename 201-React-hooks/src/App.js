import DemoUseCallback from "./UseCallback/DemoUseCallback";
import DemoUseContext from "./UseContext/DemoUseContext";
import DemoUseEffect from "./UseEffect/DemoUseEffect";
import DemoUseReducer from "./UseReducer/DemoUseReducer";
import DemoUseState from "./UseState/DemoUseState";

function App() {
  return (
    <div className="App">
      <h2>UseState</h2>
      <DemoUseState />
      <hr />

      <h2>UseEffect</h2>
      <DemoUseEffect />
      <hr />

      <h2>UseContext</h2>
      <DemoUseContext />
      <hr />

      <h2>UseReducer</h2>
      <DemoUseReducer />
      <hr />

      <h2>UseCallback</h2>
      <DemoUseCallback />
      <hr />
    </div>
  );
}

export default App;
