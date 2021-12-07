import React from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'

const WithRouter = (Child) => {
  return function WithRouter(props) {
    const location = useLocation()
    const navigate = useNavigate()
    const params = useParams()

    return (
      <Child
        {...props}
        navigate={navigate}
        location={location}
        params={params}
      />
    )
  }
}

export default WithRouter
