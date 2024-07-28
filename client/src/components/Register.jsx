import { Link } from "react-router-dom"
const Register = () => {
    return (
      <div className="items-center flex justify-center w-full">
        <div className="basis-1/2 flex justify-center items-center">
          <div className="flex items-center justify-center rounded-xl bg-white border border-black w-[400px] h-[400px]">
              <div className="flex flex-col space-y-8">
                  <h1 className="text-center text-xl">Register</h1>
                  <form action="" className="flex flex-col space-y-8 items-center">
                      <input type="text" label="Login" placeholder="Your username" className="w-[300px] h-[30px]"/>
                      <input type="text" label="Login" placeholder="Your e-mail" className="w-[300px] h-[30px]"/>
                      <input type="text" label="Login" placeholder="Your passwords" className="w-[300px] h-[30px]"/>
                      <button className="py-2 rounded-full bg-green-400 text-white w-[200px]">Submit</button>
                  </form>
                  <p className="text-[10px]">Already Have An Account? <span className="text-green-500"><Link to="/">Please Login</Link></span></p>
              </div>
  
          </div>
        </div>
        <div className="basis-1/2 h-full flex items-center justify-center">
        <img src="https://static.vecteezy.com/system/resources/thumbnails/034/217/966/small_2x/one-piece-luffy-with-rainbow-color-ai-generative-png.png" className=""alt="" />
        
        </div>
      </div>
    )
  }
  
  export default Register
  