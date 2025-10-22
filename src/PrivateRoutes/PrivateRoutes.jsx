import React from 'react';
import { Authcontext } from './Context';
import { Children } from 'react';

const PrivateRoutes = ({Children}) => {
    return (
        <div>
            <Authcontext>{Children}</Authcontext>
        </div>
    );
};

export default PrivateRoutes;