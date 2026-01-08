import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";

import Home from "../Pages/Home";
import UpdateProfile from "../Pages/UpdateProfile";
import PrivateRouter from "../PrivateRoutes/PrivateRouter";
import GameDetails from "../Pages/GameDetails";
import Games from "../Pages/Games";
import MyProfil from "../Pages/MyProfil";
import NotFound from "../Pages/NotFound";
import Forgatepassword from "../Pages/Forgatepassword";
import About from "../Pages/About";


const router=createBrowserRouter([
    {
        path:'/',
        errorElement:<NotFound></NotFound>,
        element:<MainLayout></MainLayout>,
        children:[

            {
                path:'/',
                element:<Home></Home>,

            },
            {
                path:'/GameDetails/:id',
                element:<GameDetails/>
            },

            {
                path:'/Login',
                element:<Login></Login>,
            },
            {
                path:'/Register',
                element:<Register></Register>
            },
          
            {
                path:'/Games',
                element:<Games></Games>
            },
          
            {
                path:'/updateProfile',
                element:<UpdateProfile></UpdateProfile>,
            },
            {
                path:'/Myprofile',
                element:<PrivateRouter><MyProfil/></PrivateRouter>
            },
            {
                path:'/Forgatepassword',
                element:<Forgatepassword></Forgatepassword>

            },
            {
                   path:'/About',
                   element:<About></About>
            }
           
            
        ]
            
          
    },
              
])

export default router