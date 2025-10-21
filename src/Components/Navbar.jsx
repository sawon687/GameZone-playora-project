import React from 'react';
import { FaUserCircle } from 'react-icons/fa';
import { NavLink } from 'react-router';


const Navbar = () => {
    const links=<>
    <li><NavLink to='/'>Home</NavLink></li>
        <li><NavLink to='/UpdateProfile'>UpdateProfile</NavLink></li>
        <li><NavLink  to='/Login'>Community</NavLink></li>
        <li><NavLink className='btn border-green-500 border-2' to='/Register'>RegisTer</NavLink></li>
        <li><NavLink className="btn px-7 bg-green-500 text-white" to='/Login'>Login</NavLink></li>
        
        <NavLink ><FaUserCircle size={26} /><span>Profile</span></NavLink>
    
    </>
    return (
    
        <>
     
        </>
    );
};

export default Navbar;