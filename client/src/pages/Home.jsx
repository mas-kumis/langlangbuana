import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'
import { useSelector } from 'react-redux'
const Home = () => {
  const {userInfo} = useSelector((state) => state.auth)
  return (
    <div className='flex'>
     <Navbar/>
      <div>
        <h1>Hello Developers</h1>
        {userInfo ?
        <div>
         <p>You are Login </p> 
        <Link to="/dashboard"> <button className="`bg-blue-500 text-white rounded-lg px-4 py-2">Dashboard</button></Link>
         </div> : 
          <div className="flex">
              <Link to="/login"><button className="bg-blue-500 text-white rounded-lg px-4 py-2">Login</button></Link>
              <Link to="/register"><button className="bg-blue-500 text-white rounded-lg px-4 py-2">Register</button></Link>
          </div>
          }
      </div> 
    </div>
  )
}

export default Home
