import React from "react";
import { DataContext } from "./ChallengeE";

export default function ComponentLevel2_1() {
  return (
    <DataContext.Consumer>
      <h1>Level2-1</h1>
      {(data) => console.log(data)}
      {/* {(data) =>
        data.map(
          <div key={data.id}>
            <p>ID:{data.id}</p>
            <p>NAME:{data.name}</p>
            <p>EMIAL:{data.email}</p>
          </div>
        )
      } */}
    </DataContext.Consumer>
  );
}
