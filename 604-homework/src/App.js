import React, { useState } from "react";
import ComponentLevel1 from "./components/ComponentLevel1";

export const DataContext = React.createContext();

function App() {
  const [data, setData] = useState([
    {
      id: 1,
      name: "eric",
      email: "eric@gmail.com",
    },
  ]);
  console.log(data[0].id);

  return (
    <DataContext.Provider className="App">
      <hr />
      <p>Top Compo</p>
      <p>ID:{data[0].id}</p>
      <p>NAME:{data[0].name}</p>
      <p>EMAIL:{data[0].email}</p>
      <ComponentLevel1 />
    </DataContext.Provider>
  );
}

export default App;
