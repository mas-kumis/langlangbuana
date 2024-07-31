import { useState} from 'react'
import { IoMdHome } from "react-icons/io";
import { RiLoginBoxFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { FaPenToSquare } from "react-icons/fa6";
import {Link} from "react-router-dom"

import { useDispatch, useSelector } from "react-redux"
import { useLogoutMutation } from '../redux/api/usersApiSlice'
import {logout} from '../redux/features/auth/authSlice'
const Navbar = () => {
    const [open, setOpen] = useState(true)
    const {userInfo} = useSelector((state) => state.auth)
    const dispatch = useDispatch()
    const [logoutApiCall] = useLogoutMutation() 
    const logouthandler = async () => {
      try{
          await logoutApiCall().unwrap()
          dispatch(logout())
      } catch(err){
          console.log(err)
      }
  }
  return (
    <nav >
        <div className={` ${open ? "w-[60px]" : "w-[200px]"} bg-slate-800 h-screen  flex flex-col justify-between items-start py-8 w-[60px] px-4`}>
        <div className="flex flex-col space-y-4 items-start">
        <button className="my-4 "onClick={() => setOpen(!open)} >
            <div className="flex space-x-4">
            <GiHamburgerMenu className="text-white text-[24px]"/>
            </div>
        </button>
        <Link to="/">
        <button>
            <div className="flex space-x-2">
            <IoMdHome className="text-white text-[24px]"/>
            <p className={` ${open ? "hidden" : "block" } text-white font-semibold`}> Home </p>
            </div>
        </button>
        </Link>

        </div>
        
        <div className="flex flex-col space-y-4 items-start">
        { userInfo ?  
      
        <button onClick={logouthandler}>
            <div className="flex space-x-2">
            <RiLoginBoxFill className="text-white text-[24px]"/>
            <p className={` ${open ? "hidden" : "block" } text-white font-semibold`}> Logout </p>
            </div>
        </button>
        :  
        <Link to="/login">
        <button>
            <div className="flex space-x-2">
            <RiLoginBoxFill className="text-white text-[24px]"/>
            <p className={` ${open ? "hidden" : "block" } text-white font-semibold`}> Login </p>
            </div>
        </button>
        </Link>}
        { userInfo ? "" : <Link to="/register">
        <button>
            <div className="flex space-x-2">
            <FaPenToSquare className="text-white text-[24px]"/>
            <p className={` ${open ? "hidden" : "block" } text-white font-semibold`}>Register </p>
            </div>
        </button>
        </Link>}
       
        </div>
        </div>
      
    </nav>
  )
}

export default Navbar
