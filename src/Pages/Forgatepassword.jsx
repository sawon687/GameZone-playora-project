import React, {  useContext, useRef,  } from 'react';
import { Authcontext } from '../PrivateRoutes/Context';
import { useLocation } from 'react-router';
import { div } from 'motion/react-client';

const Forgatepassword = () => {
    const emailRef=useRef()
const loaction=useLocation()
const {resetPassword}=useContext(Authcontext)
    
       const handleReset=(e)=>{
          e.preventDefault()
     
    if(loaction.state?.email)
    {   
        emailRef.current.value=location.state.email;
        
    }

    const email=emailRef.current.value
        resetPassword(email).then(()=>{
            alert('Email Reset succussfully,Please check your email')
        })
 
      
     }
    
    return (
       < div className='flex justify-center items-center min-h-screen'>
       <div className="card  bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
                        <div className="card-body">
        <fieldset className="fieldset">
            <input
                type="email"
                name="email"
                  ref={emailRef}
                className="input outline-none placeholder-gray-400"
                placeholder="Email"
              />
          
          
          <button className="btn btn-neutral mt-4">Reset Password</button>
        </fieldset>
      </div>
      </div>
      </div>
             
    );
};

export default Forgatepassword;