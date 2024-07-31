import { Link, useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'
import Navbar from "../components/Navbar"
import {useState, useEffect } from "react"

import { useSelector, useDispatch } from "react-redux"
import { useLoginMutation } from "../redux/api/usersApiSlice"
import { setCredentials } from "../redux/features/auth/authSlice"


const Login = () => {
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')

  const [login, {isLoading}] = useLoginMutation()
  const {userInfo} = useSelector(state => state.auth)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (userInfo) {
      navigate('/dashboard')
    }
  }, [ navigate, userInfo])

  const loginHandler = async (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.error('Please fill in all fields')
      return
    }    
    try {
      const res = await login({ email, password }).unwrap()
      dispatch(setCredentials({...res}))
      toast.success('Login Successful')
      navigate('/')
    } catch (err) {
      console.log(err)
      toast.error(err?.data?.message || err.error)
    }
  }
  return (
    <div className="flex">
      <Navbar/>
    <div className="flex items-center justify-center h-screen">
        <div className="bg-white rounded-xl p-[30px] border border-slate-500">
            <h1 className="my-2 text-center">Login</h1>
            <form onSubmit={loginHandler}>
                    <label className="block text-slate-500" htmlFor="email" id={email}  >Email</label>
                    <input name="email" className="w-[300px] p-2 border border-slate-500 rounded-md mb-6" onChange={(e)=> setEmail (e.target.value)} value={email} type="email"  placeholder="yourmail.com" />
                    <label name="password" className="block text-slate-500" htmlFor="password" id={password}>Password</label>
                    <input className="w-[300px] p-2 border border-slate-500 rounded-md mb-6" onChange={(e)=> setPassword (e.target.value)}  value={password} type="password"  placeholder="your password" />
                    <br />
                    {isLoading ? <button className="w-[300px] p-2 border bg-blue-500 text-white hover:bg-blue-700 border-slate-500 rounded-md mb-6" type="submit">Loading</button> : <button className="w-[300px] p-2 border bg-blue-500 text-white hover:bg-blue-700 border-slate-500 rounded-md mb-6" type="submit">Login</button> }
                    

            </form>
            <p>Already have an account?<span className="text-blue-500"><Link to="/register">Register</Link></span> </p>
        </div>
        </div>
    </div>
  )
}

export default Login
