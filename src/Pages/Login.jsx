import {  useContext, useRef, useState } from 'react';
import { Authcontext } from '../PrivateRoutes/Context';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate   } from 'react-router';
import { toast } from 'react-toastify';


const Login = () => {
    const {LoginUser,signInAndLoginGoogle, resetPassword}=useContext(Authcontext)
     const [showPassword,setShowPassword]=useState(false)
     const navigate=useNavigate()
     const location=useLocation()
     const path=location.state?.path?.pathname || '/'
     
     
    const emailRef=useRef()
     const handleLogin=(e)=>{
      e.preventDefault()
      const Email=e.target.email.value;
      const password=e.target.password.value ;

       LoginUser(Email,password).then(res=>{
              console.log(res)
           toast('login successfully')
             navigate(path,{replace:true})
             
       }).catch(error=>{ console.log(error.message)
        
         if(error.code === 'auth/invalid-credential' || error.code === 'auth/wrong-password') {
      toast.error('Password does not match');
        } 
        else {
      toast.error('Login failed. Please try again.');
          }
       })
        
     }

     const handleforgate=(e)=>{
       e.preventDefault()
       const email=  emailRef.current.value
         resetPassword(email).then(()=>{
            navigate('/Forgatepassword',{state:{email}})
           
           
        }).catch(error=>{
            console.log(error.message);
            toast(error.message)
        })
         
         
    }
     
    const googleSignUp=()=>{
       return signInAndLoginGoogle().then(()=>{
   
          toast('successfully Google signIn');
               navigate(path,{replace:true})
           
       }).catch(error=>{
        console.log(error.message,error.code)
       })
    }
    
    return (
       <div className="w-full flex justify-center items-center min-h-screen bg-[#0e0e0e] login-bg px-4">
        <title>Login</title>
  <div className="w-full max-w-[900px] bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl shadow-2xl flex flex-col md:flex-row overflow-hidden">

    {/* Left side (Register) */}
    <div className="md:w-1/2 w-full flex flex-col justify-center items-center text-center space-y-5 py-10 px-6 bg-gradient-to-br from-purple-700/20 to-pink-700/10 backdrop-blur-xl">
      <h1 className="text-3xl md:text-4xl font-bold text-white">No account yet?</h1>
      <h3 className="text-lg md:text-2xl font-semibold text-gray-200">
        Register and start your journey today
      </h3>
      <Link
        to="/Register"
        className="btn px-10 md:px-14 py-3 md:py-4 bg-gradient-to-r from-pink-500 to-purple-500 border-none text-white font-semibold hover:scale-105 transition-all duration-300"
      >
        Register
      </Link>
    </div>

    {/* Right side (Login Form) */}
    <div className="md:w-1/2 w-full bg-[#1b1b1b]/60 p-8 flex flex-col justify-center">
      <h1 className="text-3xl md:text-4xl text-center font-bold text-white">
        Welcome Back, Gamer!
      </h1>
      <h3 className="text-center text-lg md:text-xl font-semibold text-gray-300 mt-2">
        Log in to continue your adventure.
      </h3>

      <div className="card-body mt-6">
        <form onSubmit={handleLogin} className="space-y-4">
          <fieldset className="space-y-4">
            <div>
              <label className="label text-gray-300">Email</label>
              <input
                ref={emailRef}
                type="email"
                name="email"
                className="input w-full outline-none bg-white/10 backdrop-blur-sm text-white placeholder-gray-400"
                placeholder="Email"
               
              />
            </div>

            <div className="relative">
              <label className="label text-gray-300">Password</label>
              <input
                type={showPassword ? "text" : "password"}
                name="password"
                className="input w-full outline-none bg-white/10 backdrop-blur-sm text-white placeholder-gray-400"
                placeholder="Password"
                required
              />
              <button
                onClick={() => setShowPassword(!showPassword)}
                type="button"
                className="absolute right-4 top-9 text-gray-300 hover:text-white"
              >
                {showPassword ? <FaEye /> : <FaEyeSlash />}
              </button>
            </div>

            <div className="pt-2">
              <a
                onClick={handleforgate}
                className="link link-hover text-gray-300 hover:text-pink-400"
              >
                Forgot password?
              </a>
            </div>

            <button
              type="submit"
              className="btn w-full bg-gradient-to-r from-purple-600 to-pink-500 text-white border-none font-semibold hover:scale-[1.02] transition-all duration-300"
            >
              Login
            </button>

            <p className="text-center mt-3 text-xs font-bold text-gray-400">or</p>

            <button
              onClick={googleSignUp}
              type="button"
              className="btn w-full mt-4 bg-white text-black border border-gray-200 flex items-center justify-center gap-2 hover:bg-gray-100 transition-all duration-300"
            >
              <svg
                aria-label="Google logo"
                width="16"
                height="16"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <g>
                  <path d="m0 0H512V512H0" fill="#fff"></path>
                  <path
                    fill="#34a853"
                    d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                  ></path>
                  <path
                    fill="#4285f4"
                    d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                  ></path>
                  <path
                    fill="#fbbc02"
                    d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                  ></path>
                  <path
                    fill="#ea4335"
                    d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                  ></path>
                </g>
              </svg>
              Login with Google
            </button>
          </fieldset>
          
        </form>
      </div>
    </div>
  </div>
</div>

    );
};

export default Login;