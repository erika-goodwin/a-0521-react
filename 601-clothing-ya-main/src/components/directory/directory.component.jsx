import React from 'react'
import { useSelector } from 'react-redux'

// import './directory.styles.scss';
import { DirectoryMenuContainer } from './directory.styles'

import MenuItem from '../menu-item/menu-item.component'

const Directory = () => {
  const directory = useSelector((state) => state.directory.directory)
  return (
    <DirectoryMenuContainer>
      {directory &&directory.sections.map(({ id, ...otherProps }) => (
        <MenuItem key={id} {...otherProps} />
      ))}
    </DirectoryMenuContainer>
  )
}

export default Directory
