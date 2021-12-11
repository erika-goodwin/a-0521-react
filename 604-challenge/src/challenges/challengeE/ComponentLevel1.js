import React from "react";
import ComponentLevel2_1 from "./ComponentLevel2_1";
import ComponentLevel2_2 from "./ComponentLevel2_2";

export const ComponentLevel1 = () => {
  return (
    <>
      <h1>Level 1</h1>
      <ComponentLevel2_1 />
      <ComponentLevel2_2 />
    </>
  );
};
