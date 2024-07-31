

import Navbar from '../components/Navbar'
import {  useSelector } from "react-redux"
import ProfileUpdate from '../components/ProfileUpdate'

const Dashboard = () => {
  const {userInfo} = useSelector((state) => state.auth)
  return (
    <div className="flex">
        <Navbar/>
        <div className="">      
          {userInfo && userInfo.isAdmin && ( <p>Admin</p> )}
          <ProfileUpdate/>
        </div>
        
      
    </div>
  )
}

export default Dashboard
