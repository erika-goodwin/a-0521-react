import { useState } from "react";
import React from "react";
import { ComponentLevel1 } from "./ComponentLevel1";

export const DataContext = React.createContext();

export const ChallengeE = () => {
  const [dataInTop, setDetaInTop] = useState([
      {
          id:1,
          name: 'Eric',
          email: 'eric@gmail.com'
      },
      {
          id:2,
          name: 'Lisa',
          email: 'lisa@gmail.com'
      },
  ]);
  return (
    <DataContext.Provider value={dataInTop}>
      <ComponentLevel1 />
    </DataContext.Provider>
  );
};



