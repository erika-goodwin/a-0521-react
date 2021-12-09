import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'

// import './homepage.styles.scss';
import { HomepageContainer } from './homepage.styles'

import Directory from 'components/directory/directory.component'
import { fetchDirectoryStartAsync } from 'redux/directory/directory.actions'

const HomePage = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchDirectoryStartAsync())
  }, [dispatch])

  return (
    <HomepageContainer>
      <Directory />
    </HomepageContainer>
  )
}

export default HomePage
