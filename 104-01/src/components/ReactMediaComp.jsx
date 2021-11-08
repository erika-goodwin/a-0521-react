import React from "react";
import Media from "react-media";

function ReactMediaComp() {
  return (
    <Media
      queries={{
        small: "(max-width: 599px)",
        medium: "(min-width: 600px) and (max-width: 1199px)",
        large: "(min-width: 1200px)",
      }}
    >
      {(matches) => (
        <>
          <h2>
            React <Media></Media>
          </h2>
          {matches.small && (<p>This is a SMALL screen</p>)}
          {matches.medium && (<p>This is a MEDIUM screen</p>)}
          {matches.large && (<p>This is a LARGE screen</p>)}

        </>
      )}
    </Media>
  );
}

export default ReactMediaComp;
