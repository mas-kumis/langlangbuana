
const Login = () => {
  return (
    <div className="items-center flex justify-center w-full">
      <div className="basis-1/2 flex justify-center items-center">
        <div className="flex items-center justify-center rounded-xl bg-white border border-black w-[400px] h-[400px]">
            <div className="flex flex-col space-y-8">
                <h1 className="text-center text-xl">Login</h1>
                <form action="" className="flex flex-col space-y-8 items-center">
                    <input type="text" label="Login" placeholder="Your e-mail" className="w-[300px] h-[30px]"/>
                    <input type="text" label="Login" placeholder="Your passwords" className="w-[300px] h-[30px]"/>
                    <button onClick="" className="py-2 rounded-full bg-green-400 text-white w-[200px]">Submit</button>
                </form>
                <p className="text-[10px]">Dont have an account? <span className="text-green-500">Please Register</span></p>
            </div>

        </div>
      </div>
      <div className="basis-1/2">
      <img src="https://asset.gecdesigns.com/img/wallpapers/blue-purple-beautiful-scenery-ultra-hd-wallpaper-4k-sr10012421-1706505497434-cover.webp" alt="" className="object-fill" /></div>
      
    </div>
  )
}

export default Login
