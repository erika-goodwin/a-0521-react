import React from "react";

// import './directory.styles.scss';
import { DirectoryMenuContainer } from "./directory.style";
import { directory } from "assets/data/directory";

import MenuItem from "../menu-item/menu-item.component";

class Directory extends React.Component {
  render() {
    return (
      // <div className='directory-menu'>
      <DirectoryMenuContainer>
        {directory.sections.map(({ title, imageUrl, id, size }) => (
          <MenuItem
            key={id}
            title={title}
            imageUrl={imageUrl}
            size={size}
            className={title}
          />
        ))}
      </DirectoryMenuContainer>
      // </div>
    );
  }
}

export default Directory;
