import  { useContext, useState } from 'react';

import { Link, NavLink, useNavigate } from 'react-router';
import { Authcontext } from '../PrivateRoutes/Context';
import LoadingPage from '../Pages/LoadingPage';
import { FaCircle } from 'react-icons/fa';
import PrivateRouter from '../PrivateRoutes/PrivateRouter';



const Navbar = () => {
  const {user,loading,logoutNow}=useContext(Authcontext)
  
 
  const navigate=useNavigate()
const handleLogOut=(e)=>{
e.preventDefault()
  console.log('click')
        logoutNow().then(()=>{
            navigate('/')
            alert('Sign-out successful')
        }).catch(error=>console.log(error))
    }
    
  

    
  if(loading)
  {
    return <LoadingPage></LoadingPage>
  }
    const links=<>
    <li><NavLink className={({isActive})=> isActive?' underline text-green-600':''}  to='/'>Home</NavLink></li>
        
    
        <li><NavLink className={({isActive})=> isActive?' underline text-green-600':''} to='/Games'>Games</NavLink></li>
        
        
        {         
          user? <><li><NavLink onClick={handleLogOut}  className='btn' >Logout</NavLink></li>
          <li><NavLink to='/MyProfile'>
            {user?.photoURL?( <img  className='w-[40px] h-[40px]  rounded-full' src={user?.photoURL} alt=""  
                         />):
            (<FaCircle size={28}/>)}</NavLink>
          </li></>:
          <><li><NavLink className='btn border-green-500 border-2' to='/Register'>RegisTer</NavLink></li>
          <li><NavLink className="btn px-7 bg-green-500 text-white" to='/Login'>Login</NavLink></li></>
        }
       
      
    
    </>
    return (
    
        <>
       <div className="navbar relative  px-20 bg-base-100 shadow-sm">

       
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
        {links}
      </ul>
    </div>
    <div>
        <a className="btn btn-ghost  text-xl">
       <h1 className='text-blue-800 font-bold'>Playora</h1>
 
    </a>
    </div>
  </div>
  
  <div className="navbar-end mr-5 hidden lg:flex">
    <ul className=" flex  items-center justify-between gap-5  px-1">
        {links}
    </ul>
  </div>


   
           </div>
        </>
    );
};

export default Navbar;