import React, { useState } from "react";
import cx from "classnames";

const ClassNameComp = () => {
  const [isDarkTheme, setIsDarkTheme] = useState(true);
  const [isCurrentPage, setIsCurrentPage] = useState(false);

  let headerClass = cx("Header", {
    dark: isDarkTheme,
    active: isCurrentPage,
  });

  const darkBtnHandler = () => {
      setIsDarkTheme(!isDarkTheme)
  }

  const activeBtnHandler = () => {
      setIsCurrentPage(!isCurrentPage)
  }

  return (
    <>
      <h2>ClassNames</h2>
      <h1 ClassName={headerClass}>Title</h1>
      {/* <button ClassNAme="btn" onClick ={darkBtnHandler}>Darkmode</button>
      <button className="btn" onClick = {activeBtnHandler}>Active</button> */}
      <button ClassNAme="btn" onClick ={setIsDarkTheme(!isDarkTheme)}>Darkmode</button>
      <button className="btn" onClick = {setIsCurrentPage(!isCurrentPage)}>Active</button>
    </>
  );
};

export default ClassNameComp;
