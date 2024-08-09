import React, { useEffect, useState } from 'react';
import { Routes, Route } from "react-router-dom";
import RequireAuth from './requireAuth';
import LoginPage from '../login/loginPage';
import Home from '../component/home/home';
import Service from '../component/service';
import ContactUs from '../component/contactUs';
import About from '../component/about';
import Menu from '../menu/menu';
import NoMatchRote from '../component/noMatchRote';
import ScrollToTop from './ScrollToTop';
import { UserView } from '../app/features/user/UserView';

const Navigation =()=> {
    return (
        <>
            <Menu />
            <ScrollToTop />
            <Routes>
                <Route path="login" element={<LoginPage />} />
                <Route exact path="/" element={<RequireAuth><Home /></RequireAuth>} />
                <Route exact path='home' element={<RequireAuth><Home /></RequireAuth>} />
                <Route exact path='service' element={<RequireAuth><Service /></RequireAuth>} />
                <Route exact path='about' element={<About />} />
                <Route exact path='contactUs' element={<ContactUs />} />
                <Route exact path='users' element={<UserView />} />
                <Route exact path='*' element={<NoMatchRote />} />
            </Routes>
        </>
    );
}
export default Navigation