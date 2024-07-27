
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
                      <button onClick="" className="py-2 rounded-full bg-green-400 text-white w-[200px]">Submit</button>
                  </form>
                  <p className="text-[10px]">Already Have An Account? <span className="text-green-500">Please Login</span></p>
              </div>
  
          </div>
        </div>
        <div className="basis-1/2 h-full">
        <img src="https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEiwcvQsM8-g8UhqIkYhqovspXo29w2py-MZLaIBlHXL9w6X15KhrwmQrEplNiMeVNnrkZsYznXjYFlLXwJ0a-cEI5OQv7_MUv1MF5xc434aM88hZZ-JnU-Id8EGWHOcAXCBAkEZL3VKjCWE-BtfLP7p8UoO50SZ0rOGd2OtV1gz2hDOfxd3UP6AG3TViQ/s1600/4k-pc-wallpaper-ai-art.webp" className="object-fill"alt="" />
        
        </div>
      </div>
    )
  }
  
  export default Register
  