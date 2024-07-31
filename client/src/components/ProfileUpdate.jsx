import { useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import { setCredentials } from '../redux/features/auth/authSlice'
import { useProfileMutation } from '../redux/api/usersApiSlice'

const ProfileUpdate = () => {
    const [username,setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [confirmPassword, setConfirmPassword] = useState('')

    const {userInfo} = useSelector(state => state.auth)
    const dispatch = useDispatch()
    const [updateProfile, {isLoading}] = useProfileMutation()

    useEffect(() =>{
    if(userInfo) {
            setUsername(userInfo.username)
            setEmail(userInfo.email)
        }

    }, [userInfo])

    const updateHandler = async (e) => {
        e.preventDefault();
        if( password !== confirmPassword ) {
            toast.error("Password Gak Podo Blok")
        }
        try {
            const res = await updateProfile({ _id:userInfo._id, username, email, password}).unwrap()
            dispatch(setCredentials({...res}))
            toast.success("Profile Updated")
         } catch(err) {
            toast.error(err?.data?.message || err.error)
         }
        }
    
  return (
    <div>
      <div className="flex items-center justify-center h-screen">
          <div className="bg-white rounded-xl p-[30px] border border-slate-500">
              <h1 className="my-2 text-center">Update Profile</h1>
              <form onSubmit={updateHandler}>  
                      <label className="block text-slate-500" >Profil Update</label>
                      <input onChange={(e)=> setUsername (e.target.value)} value={username}  className="w-[300px] p-2 border border-slate-500 rounded-md mb-6" type="text"  placeholder="username" />
                      <label className="block text-slate-500" >Email</label>
                      <input onChange={(e)=> setEmail (e.target.value)} value={email} className="w-[300px] p-2 border border-slate-500 rounded-md mb-6" type="email"  name="email" placeholder="yourmail.com" />
                      <label className="block text-slate-500" >Password</label>
                      <input onChange={(e)=> setPassword (e.target.value)} value={password} className="w-[300px] p-2 border border-slate-500 rounded-md mb-6" type="password"  name="password" placeholder="your password" />
                      <label className="block text-slate-500" >Confirm Password</label>
                      <input onChange={(e)=> setConfirmPassword (e.target.value)}  value={confirmPassword} className="w-[300px] p-2 border border-slate-500 rounded-md mb-6" type="password"  name="password" placeholder="your password" />
                      <br />
                      { isLoading ? <button className="w-[300px] p-2 border bg-blue-500 text-white hover:bg-blue-700 border-slate-500 rounded-md mb-6" type="submit">Loading...</button> : <button className="w-[300px] p-2 border bg-blue-500 text-white hover:bg-blue-700 border-slate-500 rounded-md mb-6" type="submit">Update</button> }       
              </form>
          </div>
          </div>
    </div>
  )
}

export default ProfileUpdate
