import { useLocation, Navigate } from 'react-router-dom'

const PrivateRoute = ({ children }) => {
    const location = useLocation()
    const currentUser = null //from useSelector (redux state)

    if(!currentUser){
        return <Navigate to="/signin" />
    }   

    return children
}

export default PrivateRoute