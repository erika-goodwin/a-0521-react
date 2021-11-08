import AxiosComp from "./components/AxiosComp";
import ClassNameComp from "./components/ClassNamesComp";
import ReactMediaComp from "./components/ReactMediaComp";


function App() {
  return (
    <div className="App">
      <h1>React 104 - Useful NPM packages</h1>
      <ClassNameComp />
      <ReactMediaComp />
      <AxiosComp item='Hi' />
    </div>
  );
}

export default App;
