import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import UseLoadData from '../Hook/UseLoaddata';
import LoadingPage from '../Pages/LoadingPage';

const MainLayout = () => {
    const {loading}=UseLoadData()

    if(loading)
    {
         return <LoadingPage></LoadingPage>
    }
    return (
        <div >
            <Navbar></Navbar>
            <div className='min-h-screen '><Outlet></Outlet></div>
            <Footer></Footer>
        </div>
    );
};

export default MainLayout;