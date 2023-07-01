import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Pages/Shared/Footer/Footer';
import Header from '../Pages/Shared/Header/Header';
import useAuth from '../Component/Hooks/useAuth';
import Spinner from '../Component/Spinner/Spinner';

const Main = () => {
    // const {loading} = useAuth()
    // if(loading){
    //     return <Spinner></Spinner>
    // }
    return (
        <div>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Main;