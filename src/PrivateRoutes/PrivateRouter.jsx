
import React, { useContext } from 'react';
import { Authcontext } from './Context';
import { Navigate, useLocation } from 'react-router';

import LoadingPage from '../Pages/LoadingPage';


const PrivateRouter = ({children}) => {
    const {user,loading}=useContext(Authcontext)

    const location=useLocation()

    if(loading){
        return<LoadingPage></LoadingPage>
    }
      
    if(user)
    {
        return children;
    }
    

    return<Navigate to='/Login' state={{path:location}} replace></Navigate>
      
    
};

export default PrivateRouter;