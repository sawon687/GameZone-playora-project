
import { Link, useLocation, useNavigate } from 'react-router';
import { Authcontext } from '../PrivateRoutes/Context';
import { useContext ,useState } from 'react';
import { Navigate } from 'react-router';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { toast } from 'react-toastify';



const Register = () => {
    const {createUser,updateUser,signInAndLoginGoogle}=useContext(Authcontext)|| {}
    const [showPassword,setShowPassword]=useState(false)
    const loaction=useLocation()
    const path=loaction.state?.path?.pathname || '/'

    const navigate=useNavigate()

  const googleSignUp=()=>{
       return signInAndLoginGoogle().then(()=>{
        navigate(path,{replace:true})
          toast('successfully Google signIn');
       }).catch(error=>{
        console.log(error.message,error.code)
       })
    }


    // console.log(createUser)
    const handleSignup=(e)=>{
       e.preventDefault();
        const form=e.target; 
        const Name=form.Name.value;
        const PhotoUrl=form.photoUrl.value;
        const Email=form.email.value;
        const Password=form.password.value;
        console.log(Name,PhotoUrl,Email,Password)

        const passwordVerification=/^(?=.*[a-z])(?=.*[A-Z]).{6,}$/
        
        if(!passwordVerification.test(Password))
        {
           return toast('❌ Password must be at least 6 characters and include at least one uppercase and  lowercase letter.')
        }
        createUser(Email,Password).then(res=>{
            console.log(res.user)
           updateUser({displayName:Name,photoURL: PhotoUrl}).then(()=>{
                navigate(path,{replace:true})
                e.target.reset()
               return  toast('Signup Succssfully')
              
           }).catch(error=>{
            console.log(error)
                
           })

        }).catch(error=>{console.log(error.message,error.code)
           toast(error.message)
        }
      )
        
        
    }

   

  
    return (
      
      <div className="flex justify-center items-center min-h-screen bg-gradient-to-r from-purple-700 via-pink-600 to-red-500 p-4">
      <div className="flex flex-col md:flex-row backdrop-blur-lg bg-white/10 shadow-2xl rounded-3xl overflow-hidden w-full max-w-5xl border border-white/20">
     <title>Register </title>
        {/* Left Section */}
        <div className="w-full md:w-1/2 flex flex-col justify-center items-center p-8 text-white bg-gradient-to-b from-purple-800/70 to-pink-700/70" >
          <h1 className="text-4xl font-bold mb-2 text-center">Already have an account?</h1>
          <p className="text-lg text-center mb-6">Sign in and continue your journey!</p>
          <Link
            to="/Login"
            className="px-8 py-3 rounded-xl bg-white text-black font-semibold hover:scale-105 duration-300"
          >
            Login
          </Link>
        </div>

        {/* Right Section */}
        <div className="w-full md:w-1/2 bg-[#0f0f0f]/70 text-white p-8">
          <h1 className="text-4xl text-center font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
            Sign Up to Playora
          </h1>
          <p className="text-center text-gray-300 mt-2 mb-6">
            Create your free account and start exploring the world of games 🎮
          </p>

          <form onSubmit={handleSignup} className="space-y-4">
            {/* Username */}
            <div>
              <label className="block mb-1 font-semibold">Username</label>
              <input
                type="text"
                name="Name"
                placeholder="Enter your name"
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-pink-500 outline-none"
                required
              />
            </div>

            {/* Photo URL */}
            <div>
              <label className="block mb-1 font-semibold">Photo URL</label>
              <input
                type="text"
                name="photoUrl"
                placeholder="Profile photo link"
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-pink-500 outline-none"
                required
              />
            </div>
          

            {/* Email */}
            <div>
              <label className="block mb-1 font-semibold">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 rounded-lg bg-white/10 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-pink-500 outline-none"
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <label className="block mb-1 font-semibold">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                placeholder="Enter your password"
                className="w-full px-4 py-3  rounded-lg bg-white/10 text-gray-200 placeholder-gray-400 focus:ring-2 focus:ring-pink-500 outline-none"
                required
              />
              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-4 top-11 text-gray-300 hover:text-white"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>

            <div className="text-right text-sm text-pink-400 hover:underline cursor-pointer">
              Forgot password?
            </div>

            <button
              type="submit"
              className="w-full py-3 mt-2 bg-gradient-to-r from-purple-500 to-pink-600 rounded-lg font-semibold hover:opacity-90 transition duration-300"
            >
              Register
            </button>

            <p className="text-center text-gray-400 mt-3 font-medium">— or —</p>

            <button
              type="button"
              onClick={googleSignUp}
              className="w-full py-3 mt-2 bg-white text-black rounded-lg font-semibold flex justify-center items-center gap-2 hover:scale-105 transition"
            >
              <svg
                aria-label="Google logo"
                width="18"
                height="18"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path>
                  <path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path>
                  <path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path>
                  <path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path>
                </g>
              </svg>
              Sign Up with Google
            </button>
          </form>
        </div>
      </div>
    </div>
    );
};

export default Register;