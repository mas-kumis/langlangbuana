import {  useNavigate } from "react-router-dom"
import { useSelector } from "react-redux"
import { useEffect } from "react"

const AdminRoute = ({children}) => {
    const {userInfo} = useSelector((state) => state.auth)
    const navigate = useNavigate()
    useEffect(() => {
        if (!userInfo || !userInfo.isAdmin) {
            navigate('/login')
        }
    }, [userInfo, navigate])

    return children
    
}

export default AdminRoute