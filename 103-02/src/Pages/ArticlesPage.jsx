import React from 'react'
import { Outlet } from 'react-router-dom'

const ArticlesPage = () => {
  return (
    <>
      <h1>Articles Page</h1>
      <Outlet />
    </>
  )
}

export default ArticlesPage
