import { useNavigate } from "react-router"
import useUser from "../hooks/useUser"
import Loading from "../components/Shared/Loading"

const PrivateRoute = ({children}) => {
    const {user, loading} = useUser()
    const navigate = useNavigate()

    if(loading) {
        return <Loading/>
    }
    if(!user) {
        return navigate("/login")
    }

  return children
}

export default PrivateRoute




