import React, { useContext, useRef, useEffect } from 'react';
import { Authcontext } from '../PrivateRoutes/Context';
import { useLocation } from 'react-router';
import { toast } from 'react-toastify';

const Forgatepassword = () => {
  const emailRef = useRef();
  const location = useLocation(); // spelling ঠিক করা হয়েছে
  const { resetPassword } = useContext(Authcontext);

  // useEffect দিয়ে page load এ email auto-fill করা
  useEffect(() => {
    if (location.state?.email) {
      emailRef.current.value = location.state.email;
    }
  }, [location]);

  const handleReset = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;

    if (!email) {
      toast('Please enter your email!');
      return;
    }

    resetPassword(email)
      .then(() => {
        toast('✅ Password reset email sent! Check your inbox.');
         emailRef.current.value = '';
      })
      .catch((error) => {
        console.error(error.message);
      });
  };

  return (
    <div className='flex justify-center items-center min-h-screen'>
      <div className='card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl'>
        <div className='card-body'>
          <form onSubmit={handleReset}>
            <fieldset className='fieldset'>
              <input
                type='email'
                name='email'
                ref={emailRef}
                className='input outline-none placeholder-gray-400'
                placeholder='Enter your email'
              />
              <button className='btn btn-neutral mt-4'>Reset Password</button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Forgatepassword;
