import React from 'react'
import { useSelector } from 'react-redux'

// import './directory.styles.scss';
import { DirectoryMenuContainer } from './directory.styles'

import MenuItem from '../menu-item/menu-item.component'

const Directory = () => {
  const directory = useSelector((state) => state.directory)
  
  return (
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
  )
}

export default Directory
