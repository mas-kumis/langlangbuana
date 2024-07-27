
import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'
// import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Login from '../components/Login'

const Home = () => {
  return (
    <div className="flex">
       {/* <ToastContainer/> */}
      <Navigation/>
      <Login/>
      <main className="py-3">
        <Outlet/>
      </main>
    </div>
  )
}

export default Home
