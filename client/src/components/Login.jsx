import { Link } from "react-router-dom"

const Login = () => {

  return (
    <div className="items-center flex justify-center w-full">
      <div className="basis-1/2 flex justify-center items-center">
        <div className="flex items-center justify-center rounded-xl bg-white border border-black w-[400px] h-[400px]">
            <div className="flex flex-col space-y-8">
                <h1 className="text-center text-xl">Login</h1>
                <form   action="" className="flex flex-col space-y-8 items-center">
                    <input name="email" type="text" label="Login" placeholder="Your e-mail" className="w-[300px] h-[30px]"/>
                    <input  name="password"  type="text" label="Login" placeholder="Your passwords" className="w-[300px] h-[30px]"/>
                    <button type="submit" className="py-2 rounded-full bg-green-400 text-white w-[200px]">Submit</button>
                </form>
                <p className="text-[10px]">Dont have an account? <span className="text-green-500"><Link to="/register">Please Register</Link></span></p>
            </div>

        </div>
      </div>
      <div className="basis-1/2 flex justify-center items-center">
      <img src="https://i.pinimg.com/originals/bb/e2/8d/bbe28d3724c5e91f44e4c4604069eea2.png" alt="" className="" /></div>
      
    </div>
  )
}

export default Login
