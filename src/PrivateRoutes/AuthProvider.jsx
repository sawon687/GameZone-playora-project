import { createUserWithEmailAndPassword, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signOut, updateProfile } from 'firebase/auth';
import { useEffect, useState } from 'react';
import auth from '../Farebase/farebase.init';
import { Authcontext } from './Context';

const AuthProvider = ({children}) => {
 
   const [user,SetUser]=useState(null)
   const [loading ,setLodaing]=useState(true)
   
    const createUser=(email, password)=>{
        return createUserWithEmailAndPassword(auth,email, password);
    }

    const LoginUser=(email,password)=>
    {
        return signInWithEmailAndPassword(auth,email,password)
    }

    const updateUser=(updateprofile)=>{
        return updateProfile(auth.currentUser,updateprofile)
    }
    const logoutNow=()=>{
        return signOut(auth)
    }
    const resetPassword=(email)=>{
       return sendPasswordResetEmail(auth,email)
    }
    useEffect(()=>{
       const unsubscribe=onAuthStateChanged(auth,(currentUsers)=>{
           SetUser(currentUsers)
           setLodaing(false)
       })
           
       return ()=>{
        unsubscribe()
       }
    },[])
    console.log(user)
    
      
    const custInfo={
          createUser,
          LoginUser,
          logoutNow,
          updateUser,
          user,
          SetUser,
          loading,
          resetPassword
    }
    return (
        <div>
            <Authcontext value={custInfo}>{children}</Authcontext>
        </div> 
        
    );
};

export default AuthProvider;