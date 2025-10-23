import { use, useRef, useState } from 'react';
import { Authcontext } from '../PrivateRoutes/Context';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const Login = () => {
    const {LoginUser,resetPassword,signInAndLoginGoogle}=use(Authcontext)
     const [showPassword,setShowPassword]=useState(false)
    const emailRef=useRef()
     const handleLogin=(e)=>{
      e.preventDefault()
      const Email=e.target.email.value;
      const password=e.target.password.value ;

       LoginUser(Email,password).then(res=>{
              console.log(res)
           alert('login successfully')
       }).catch(error=> console.log(error.message))
        
     }

     const handleReset=()=>{
       const email=  emailRef.current.value
        resetPassword(email).then(()=>{
          alert('password reset check your email')
        })
     }
    const googleSignUp=()=>{
       return signInAndLoginGoogle().then(()=>{
          alert('success fully google signIn');
       }).catch(error=>{
        console.log(error.message,error.code)
       })
    }
    return (
        <>
         <div className="hero min-h-screen">
         
      <div className="card  w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
         <form onSubmit={handleLogin}>
            <fieldset >
          <label className="label">Email</label>
          <input  ref={emailRef} type="email" name='email' className="input" placeholder="Email" />
           <div className=' relative'>
                      <label className="label">Password</label>
                    <input type={showPassword?'text':'password'} className="input outline-none"  name='password' placeholder="Password" />
                     <button onClick={()=>setShowPassword(!showPassword)} className=' absolute right-8 top-8'>{showPassword?<FaEye/>:<FaEyeSlash/>}</button>
                    </div>
          <div className=' pt-2'><a onClick={handleReset}  className="link link-hover text-red-500">Forgot password?</a></div>
          <button  className="btn w-full btn-neutral mt-4">Login</button>
          <button onClick={googleSignUp} className="btn w-full mt-5 bg-white text-black border-[#e5e5e5]">
            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
                 Login with Google
             </button>
        </fieldset>
         </form>
      </div>
    </div>
  </div>

    </>
    );
};

export default Login;