import React from "react";
import { DataContext } from "../App";

export default function ComponentLevel2() {
  return (
    <DataContext.Consumer>
      {(data) => (
        <div>
          <hr />
          <p>Level2 Comp</p>
          <p>ID:{data[0].id}</p>
          <p>NAME:{data[0].name}</p>
          <p>EMAIL:{data[0].email}</p>
        </div>
      )}
    </DataContext.Consumer>
  );
}
