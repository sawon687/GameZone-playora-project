import { use, useRef } from 'react';
import { Authcontext } from '../PrivateRoutes/Context';

const Login = () => {
    const {LoginUser,resetPassword}=use(Authcontext)
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
  
    return (
        < >
         <div className="hero min-h-screen">
      <div className="card  w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
         <form onSubmit={handleLogin}>
            <fieldset >
          <label className="label">Email</label>
          <input  ref={emailRef} type="email" name='email' className="input" placeholder="Email" />
          <label className="label">Password</label>
          <input type="password" name='password' className="input" placeholder="Password" />
          <div className=' pt-2'><a onClick={handleReset}  className="link link-hover text-red-500">Forgot password?</a></div>
          <button  className="btn w-full btn-neutral mt-4">Login</button>
        </fieldset>
         </form>
      </div>
    </div>
  </div>

    </>
    );
};

export default Login;