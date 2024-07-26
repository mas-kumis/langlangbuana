
import { Outlet } from 'react-router-dom'
import Navigation from '.././pages/Auth/Navigation'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const Home = () => {
  return (
    <div>
       <ToastContainer/>
      <Navigation/>
      <main className="py-3">
        <Outlet/>
      </main>
    </div>
  )
}

export default Home
