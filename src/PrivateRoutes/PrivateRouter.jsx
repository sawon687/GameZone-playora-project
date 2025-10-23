
import React, { useContext } from 'react';
import { Authcontext } from './Context';
import { Navigate, useNavigate } from 'react-router';

const PrivateRouter = ({children}) => {
    const {user}=useContext(Authcontext)
      
    if(user)
    {
        return children;
    }

    return <Navigate to='/Login'></Navigate>
      
    
};

export default PrivateRouter;