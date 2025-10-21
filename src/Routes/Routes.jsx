import { createBrowserRouter } from "react-router";
import MainLayout from "../Layout/MainLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import Community from "../Pages/Community";
import Myprofile from "../Pages/Myprofile";
import UpdateProfile from "../Pages/UpdateProfile";
import Home from "../Pages/Home";

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
                   path:'/MyProfile',
                   element:<Myprofile></Myprofile>
            },
            {
                Path:'/UpdateProfile',
                element:<UpdateProfile></UpdateProfile>
            }
        ]

    }
])

export default router