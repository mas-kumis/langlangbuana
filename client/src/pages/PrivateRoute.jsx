import {  useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useEffect } from "react"

const PrivateRoute = ({children}) => {
    const {userInfo} = useSelector((state) => state.auth)
    const navigate = useNavigate()
    useEffect(() => {
        if (!userInfo) {
            navigate('/login')
        }
    }, [userInfo, navigate])

    return children
    
}

export default PrivateRoute