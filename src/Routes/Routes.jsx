import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Community from "../Pages/Community";


import Home from "../Pages/Home";
import GameDetails from "../Pages/GameDetails";
import UpdateProfile from "../Pages/UpdateProfile";

const router=createBrowserRouter([
    {
        path:'/',
        element:<MainLayout></MainLayout>,
        children:[

            {
                path:'/',
                element:<Home></Home>,

            },
            {
                path:'/GameDetails/:id',
                element:<GameDetails></GameDetails>
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
                  path:'/Community',
                  element:<Community></Community>
            },
          
            {
                path:'/updateProfile',
                element:<UpdateProfile></UpdateProfile>,
            },
        ]

    }
])

export default router