import  { useContext } from 'react';

import { Link, NavLink, useNavigate } from 'react-router';
import { Authcontext } from '../PrivateRoutes/Context';
import LoadingPage from '../Pages/LoadingPage';
import { FaCircle } from 'react-icons/fa';
import Navlogo from '../assets/Logonav.png'
import { toast } from 'react-toastify';




const Navbar = () => {
  const {user,loading,logoutNow}=useContext(Authcontext)
  
 
  const navigate=useNavigate()
const handleLogOut=(e)=>{
e.preventDefault()
  console.log('click')
        logoutNow().then(()=>{
            navigate('/')
            toast('Sign-out successful')
        }).catch(error=>console.log(error))
    }
    
  

    
  if(loading)
  {
    return <LoadingPage></LoadingPage>
  }

  
    const links=<>
    <li><NavLink className={({isActive})=> isActive?' cursor-pointer border-b-2 border-pink-500 bg-clip-text bg-gradient-to-r  from-purple-600 to-pink-600  font-bold text-transparent':''}  to='/'>Home</NavLink></li>
        
    
        <li><NavLink className={({isActive})=> isActive?' border-b-2 border-pink-500 bg-clip-text cursor-pointer  bg-gradient-to-r  from-purple-600 to-pink-600  font-bold text-transparent':''} to='/Games'>AllGames</NavLink></li>
        <li><NavLink className={({isActive})=> isActive?'  border-b-2 border-pink-500 bg-clip-text cursor-pointer  bg-gradient-to-r  from-purple-600 to-pink-600  font-bold text-transparent':''} to='/About'>About</NavLink></li>
    </>

    const authinButton=<>
    {         
          user? <><li><NavLink onClick={handleLogOut}  className='btn cursor-pointer bg-gradient-to-r  from-purple-600 to-pink-600 ' >Logout</NavLink></li>
          <li><NavLink to='/MyProfile'>
            {user?.photoURL?( <img  className='w-10 h-10 cursor-pointer rounded-full ring-2 ring-purple-500' src={user?.photoURL} alt=""  
                         />):
            (<FaCircle size={28}/>)}</NavLink>
          </li></>:
          <><li><NavLink className='btn bg-gradient-to-r  from-purple-600 to-blue-600  cursor-pointer' to='/Register'>RegisTer</NavLink></li>
          <li><NavLink className="btn  bg-gradient-to-r hover:opacity-50 from-purple-600 to-pink-600  text-white" to='/Login'>Login</NavLink></li></>
        }
       
    
    </>
    return (
    
        <>
       <div className="navbar md:px-20  lg:p-5 flex justify-between shadow-2xl    bg-base-100 ">

       
  <div className="navbar-start  ">
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
       <h1 className='bg-clip-text text-2xl bg-gradient-to-r  from-purple-600 to-pink-600  font-bold text-transparent'>Playora </h1>
           <img className='w-10 h-10' src={Navlogo} alt="" />
    </a>
    </div>

  </div>

  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
    {links}
    </ul>
  </div>
  
  <div className="navbar-end   lg:flex">
    <ul className=" flex  items-center justify-between gap-5  px-1">
        {authinButton}
    </ul>
  </div>


   
           </div>
        </>
    );
};

export default Navbar;