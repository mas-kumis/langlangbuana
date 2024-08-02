

import Navbar from '../components/Navbar'
import {  useSelector } from "react-redux"
import ProfileUpdate from '../components/ProfileUpdate'
import UserList from '../components/UserList'

const Dashboard = () => {
  const {userInfo} = useSelector((state) => state.auth)
  return (
    <div className="flex">
        <Navbar/>
        <div className="">      
          
          {userInfo && ( <p>{userInfo.username}</p> )}
          <ProfileUpdate/>
        </div>
        <div className="mx-4">
        {userInfo && userInfo.isAdmin && ( <UserList/> )}
          
        </div>
        
      
    </div>
  )
}

export default Dashboard
