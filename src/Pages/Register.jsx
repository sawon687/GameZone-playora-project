import React from 'react';

const Register = () => {
    return (
        <div>
            <div className="hero min-h-screen">
      <div className="card  w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
        <fieldset className="fieldset  ">
            {/* user Name */}
              <label className="label">UserName</label>
          <input type="text" className="input" placeholder="UserName" />
            <label className="label">PhotoURL</label>
          <input type="text" className="input" placeholder="PhotoURL" />
            {/* email */}
          <label className="label">Email</label>
          <input type="email" className="input" placeholder="Email" />
          {/* password */}
          <label className="label">Password</label>
          <input type="password" className="input" placeholder="Password" />
          <div><a className="link link-hover">Forgot password?</a></div>
          <button className="btn btn-neutral mt-4">Login</button>
        </fieldset>
      </div>
    </div>
  </div>
        </div>
    );
};

export default Register;