import { Link, useNavigate } from "react-router-dom"
import { useState, useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useRegisterMutation } from "../redux/api/usersApiSlice"
import { setCredentials } from "../redux/features/auth/authSlice"
import { toast } from 'react-toastify'
import Navbar from "../components/Navbar"
const Register = () => {
  const [username, setUsername] = useState('')
  const [email,setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const [register, {isLoading}] = useRegisterMutation()
  const { userInfo } = useSelector((state) => state.auth)

  useEffect(() => {
    if (userInfo) {
      navigate('/')
    }
  }, [ navigate, userInfo])

  const submitHandler = async (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      toast.error('Passwords do not match')
      return
    }
    if (!username || !email || !password || !confirmPassword) {
      toast.error('Please fill in all fields')
      return
    }
    try {
      const res = await register({ username, email, password }).unwrap()
      dispatch(setCredentials({...res}))
      toast.success('Registration Successful')
      navigate('/dashboard')
  } catch (err) {
      toast.error(err?.data?.message || err.error)
    }
   
  }

    return (
      <div className="flex">
        <Navbar/>
      <div className="flex items-center justify-center h-screen">
          <div className="bg-white rounded-xl p-[30px] border border-slate-500">
              <h1 className="my-2 text-center">Register</h1>
              <form onSubmit={submitHandler}>  
                      <label className="block text-slate-500" >Username</label>
                      <input onChange={(e)=> setUsername (e.target.value)} value={username}  className="w-[300px] p-2 border border-slate-500 rounded-md mb-6" type="text"  placeholder="username" />
                      <label className="block text-slate-500" >Email</label>
                      <input onChange={(e)=> setEmail (e.target.value)} value={email} className="w-[300px] p-2 border border-slate-500 rounded-md mb-6" type="email"  name="email" placeholder="yourmail.com" />
                      <label className="block text-slate-500" >Password</label>
                      <input onChange={(e)=> setPassword (e.target.value)} value={password} className="w-[300px] p-2 border border-slate-500 rounded-md mb-6" type="password"  name="password" placeholder="your password" />
                      <label className="block text-slate-500" >Confirm Password</label>
                      <input onChange={(e)=> setConfirmPassword (e.target.value)}  value={confirmPassword} className="w-[300px] p-2 border border-slate-500 rounded-md mb-6" type="password"  name="password" placeholder="your password" />
                      <br />
                      { isLoading ? <button className="w-[300px] p-2 border bg-blue-500 text-white hover:bg-blue-700 border-slate-500 rounded-md mb-6" type="submit">Loading...</button> : <button className="w-[300px] p-2 border bg-blue-500 text-white hover:bg-blue-700 border-slate-500 rounded-md mb-6" type="submit">Login</button> }       
              </form>
              <p>Already have an account?<span className="text-blue-500"><Link to="/login">Login</Link></span> </p>
          </div>
          </div>
      </div>
    )
  }
  
  export default Register
  