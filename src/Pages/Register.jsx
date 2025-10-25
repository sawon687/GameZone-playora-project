
import { Link, useLocation, useNavigate } from 'react-router';
import { Authcontext } from '../PrivateRoutes/Context';
import { useContext, useState } from 'react';
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
        <div>
          <title>Register</title>
            <div className="hero min-h-screen">
      <div className="card  w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
       <form onSubmit={handleSignup}>

         <fieldset className="fieldset  ">
            {/* user Name */}
              <label className="label">UserName</label>
          <input type="text" className="input" name='Name' placeholder="UserName" />
            <label className="label">PhotoURL</label>
          <input type="text" className="input" name='photoUrl' placeholder="PhotoURL" />
            {/* email */}
          <label className="label">Email</label>
          <input type="email" className="input" name='email'  placeholder="Email" />
          {/* password */}
          <div className=' relative'>
            <label className="label">Password</label>
          <input type={showPassword?'text':'password'} className="input outline-none"  name='password' placeholder="Password" />
           <button type='button' onClick={()=>setShowPassword(!showPassword)} className=' absolute right-8 top-8'>{showPassword?<FaEye/>:<FaEyeSlash/>}</button>
          </div>
          <div><a className="link link-hover">Forgot password?</a></div>
          
          <button type='submit'  className="btn btn-neutral mt-4">Register</button>

          <p className='text-[1.1rem]'>Already have an account? <Link className='text-blue-500 hover:underline' to='/Login'>Login</Link></p>
          <button type='button' onClick={googleSignUp} className="btn bg-white text-black border-[#e5e5e5]">
            <svg aria-label="Google logo" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"><g><path d="m0 0H512V512H0" fill="#fff"></path><path fill="#34a853" d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"></path><path fill="#4285f4" d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"></path><path fill="#fbbc02" d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"></path><path fill="#ea4335" d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"></path></g></svg>
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

export default Register;