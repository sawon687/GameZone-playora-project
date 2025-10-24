
import React, { useContext } from 'react';
import { Authcontext } from './Context';
import { Navigate, useLocation } from 'react-router';
import { form } from 'motion/react-client';


const PrivateRouter = ({children}) => {
    const {user}=useContext(Authcontext)
    const location=useLocation()
      
    if(user)
    {
        return children;
    }
    

    return<Navigate to='/Login' state={{form:location}} replace></Navigate>
      
    
};

export default PrivateRouter;