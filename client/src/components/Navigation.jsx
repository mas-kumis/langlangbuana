import { useState } from "react";
import { FaHome, FaShoppingCart, FaShoppingBag, FaHeartbeat, FaUserCircle   } from "react-icons/fa";
import { RiLoginBoxFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";
import { ImCancelCircle } from "react-icons/im";
import { Link } from "react-router-dom";



const Navigation = () => {
  const [sidebar, setSidebar] = useState(true)
  return (
    <nav className="flex items-start">
      <div className={`${sidebar ? "w-[60px]" : "w-[200px]" } bg-black h-screen px-[20px] flex flex-col justify-between`}>
        <div className="flex flex-col py-[30px] text-white space-y-[30px] items-start justify-start">
            <div><button onClick= {() => setSidebar(!sidebar)}>{sidebar ?<GiHamburgerMenu size={24}/>: <ImCancelCircle size={24}/> }</button></div>
            <Link to="/"> <div className="flex space-x-4 hover:text-blue-500"><FaHome size={24} className=""/>
            <p className={`${sidebar ? "hidden" : "block"}`}>Home</p></div></Link>
            <Link to="/shop"><div className="flex space-x-4 hover:text-green-500"><FaShoppingBag size={24} className=""/>
            <p className={`${sidebar ? "hidden" : "block"}`}>Shop</p></div></Link>
            <Link to="/cart"> <div className="flex space-x-4 hover:text-yellow-500"><FaShoppingCart  size={24} className=""/>
            <p className={`${sidebar ? "hidden" : "block"}`}>Cart</p></div></Link>
            <Link to="/favorite"><div className="flex space-x-4 hover:text-red-500"><FaHeartbeat size={24} className=""/>
            <p className={`${sidebar ? "hidden" : "block"}`}>Favorite</p></div></Link>     
        </div>
        <div className={`${sidebar ? "hidden" : "flex" } transition duration-300 ease-in-out flex-col py-[30px] text-white space-y-[30px]`}>
          <Link to="/"><div className="flex space-x-4 hover:text-purple-600"><RiLoginBoxFill  size={24}/> <p>Login</p></div></Link>
          <Link to="/register"><div className="flex space-x-4 hover:text-cyan-600 "><FaUserCircle  size={24}/> <p>Register</p></div></Link>
          
          
            
        </div>

      </div>
    </nav>
  )
}

export default Navigation
