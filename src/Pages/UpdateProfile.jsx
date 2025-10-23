import React, { useContext } from 'react';
import { Authcontext } from '../PrivateRoutes/Context';
import auth from '../Farebase/farebase.init';

const UpdateProfile = () => {
    const {updateUser,SetUser}=useContext(Authcontext)
    const handleUpdate=(e)=>{
           e.preventDefault()
           const displayName= e.target.Username.value;
           const photoURL=e.target.photoUrl.value;
             // 🔥 logged-in check
              if (!auth.currentUser) {
                alert("No user logged in!");
                return;
    }
           console.log(displayName,photoURL)
           updateUser({displayName:displayName,photoURL:photoURL}).then(()=>{
            console.log(auth.currentUser.photoURL)
            SetUser({...auth.currentUser})
            alert('success full user details')
            
           }).catch(error=>{
             console.log(error.message)
           })
    }
    return (
        <>
          <div className="hero min-h-screen">
      <div className="card  w-full max-w-sm shrink-0 shadow-2xl">
      <div className="card-body">
         <form onSubmit={handleUpdate}>
            <fieldset >
          <label className="label">UserName</label>
          <input type='text' name='Username' className="input" placeholder="UserName" />
          <label className="label">PhotoURL</label>
          <input type="text" name='photoUrl' className="input" placeholder="PhotoURL" />
           <button className="btn w-full btn-neutral mt-4">Update</button>
        </fieldset>
         </form>
      </div>
    </div>
  </div>

        </>
    );
};

export default UpdateProfile;