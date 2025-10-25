import React, { useContext } from 'react';
import { Authcontext } from '../PrivateRoutes/Context';
import auth from '../Farebase/farebase.init';
import { toast } from 'react-toastify';

const UpdateProfile = () => {
    const {updateUser,SetUser}=useContext(Authcontext)
    const handleUpdate=(e)=>{
           e.preventDefault()
           const displayName= e.target.Username.value;
           const photoURL=e.target.photoUrl.value;
             
              if (!auth.currentUser) {
                alert("No user logged in!");
                return;
    }
           console.log(displayName,photoURL)
           updateUser({displayName:displayName,photoURL:photoURL}).then((res)=>{
            console.log(auth.currentUser.photoURL)
             
            SetUser({...auth.currentUser})
                toast('successfull userUpdate details')
                   e.target.reset()
            
           }).catch(error=>{
             console.log(error.message)
           })
    }
    return (
        <>
        
    <section className="min-h-screen flex justify-center items-center bg-gradient-to-br from-gray-100 to-gray-300 px-4 py-10">
      <title>Update Profile</title>

      <div className="w-full max-w-md bg-white rounded-2xl shadow-2xl p-8 border border-gray-300 transition-all duration-300 hover:shadow-purple-500/20">
        <h1 className="text-3xl font-bold text-center mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">
          Update Your Profile
        </h1>

        <p className="text-center text-gray-500 mb-6">
          Make changes to your username or profile picture.
        </p>

        <form
          onSubmit={handleUpdate}
          className="flex flex-col gap-4"
        >
          {/* User Name */}
          <div className="flex flex-col">
            <label className="label font-semibold text-gray-700">Username</label>
            <input
              type="text"
              name="Username"
              defaultValue={updateUser?.displayName || ""}
              placeholder="UserName"
              className="input w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
            />
          </div>

          {/* Photo URL */}
          <div className="flex flex-col">
            <label className="label font-semibold text-gray-700">Photo URL</label>
            <input
              type="text"
              name="photoUrl"
              defaultValue={updateUser?.photoURL || ""}
              placeholder="Photo URL"
              className="input w-full px-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent transition"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="mt-4 w-full py-3 bg-gradient-to-r from-purple-600 to-pink-600 text-white font-semibold rounded-xl hover:opacity-90 transition duration-300"
          >
            Update
          </button>
        </form>
      </div>
    </section>

        </>
    );
};

export default UpdateProfile;