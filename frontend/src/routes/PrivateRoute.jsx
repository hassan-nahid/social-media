import { useNavigate } from "react-router"
import useUser from "../hooks/useUser"

const PrivateRoute = ({children}) => {
    const {user, loading} = useUser()
    const navigate = useNavigate()

    if(loading) {
        return <div>Loading...</div>
    }
    if(!user) {
        return navigate("/login")
    }

  return children
}

export default PrivateRoute




