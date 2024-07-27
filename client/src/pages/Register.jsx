
import { Outlet } from 'react-router-dom'
import Navigation from '../components/Navigation'
// import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import Register from '../components/Register'

const RegisterPage = () => {
  return (
    <div className="flex">
       {/* <ToastContainer/> */}
      <Navigation/>
      <Register/>
      <main className="py-3">
        <Outlet/>
      </main>
    </div>
  )
}

export default RegisterPage
