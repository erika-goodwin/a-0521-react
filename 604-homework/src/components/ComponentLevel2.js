import React from "react";
import { DataContext } from "../App";

export default function ComponentLevel2() {
  return (
    <DataContext.Consumer>
      {(data) => {
        console.log(data);
        
      }}
    </DataContext.Consumer>
  );
}
