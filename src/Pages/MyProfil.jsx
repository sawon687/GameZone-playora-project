import React, { useContext } from 'react';
import { Authcontext } from '../PrivateRoutes/Context';
import { Link } from 'react-router';

const MyProfil = () => {
    const {user}=useContext(Authcontext)
    return (
        <>
            <div className='   flex justify-center   mt-40 items-center'>
                <title>MyProfile</title>
          <div className='w-[250px] space-y-5 flex flex-col shadow-2xl bg-[#181818]  rounded-xl justify-center items-center h-[350px] '>
                {
                        user?<img className='w-[100px] h-[100px] rounded-full' src={user?.photoURL} alt="" />:<FaCircle size={40}/>

                     }    
                <h1>{user?.displayName}</h1>
                 <p>{user?.email}</p>

                 <Link className='btn bg-green-600 ' 
                 to='/updateProfile'>Update Profile</Link>
                 
              </div>
         </div>
        </>
    );
};

export default MyProfil;