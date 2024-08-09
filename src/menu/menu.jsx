import React from 'react';
import { NavLink, BrowserRouter as Router, } from 'react-router-dom';
import { useAuth } from '../routes/privateRoute';

const Menu = () => {
    const auth = useAuth();
    const user = localStorage.getItem("user");
    const handleLogout = () => {
        debugger
        localStorage.clear();
        auth.login(null);
    }
    return (
        <div >
            <ul className="navbar">
            <li><NavLink to='/home' className="nav-bar-link"
                style={({ isActive }) => ({
                    color: isActive ? 'red' : '#545e6f',
                    // background: isActive ? '#7600dc' : '#f0f0f0',
                    // paddingRight: "20px"
                })}
            >Home</NavLink></li>
            <li><NavLink to='/service' className="nav-bar-link"
                style={({ isActive }) => ({
                    color: isActive ? 'red' : '#545e6f',
                    // background: isActive ? '#7600dc' : '#f0f0f0',
                    // paddingRight: "20px"
                })}
            >Services</NavLink></li>
            <li><NavLink to='/about' className="nav-bar-link"
                style={({ isActive }) => ({
                    color: isActive ? 'red' : '#545e6f',
                    // background: isActive ? '#7600dc' : '#f0f0f0',
                    // paddingRight: "20px"
                })}
            >About</NavLink></li>
            <li><NavLink to='/contactUs' className="nav-bar-link"
                style={({ isActive }) => ({
                    color: isActive ? 'red' : '#545e6f',
                    // background: isActive ? '#7600dc' : '#f0f0f0',
                    // paddingRight: "20px"
                })}
            >ContactUs</NavLink></li>
            <li><NavLink to='/users' className="nav-bar-link"
                style={({ isActive }) => ({
                    color: isActive ? 'red' : '#545e6f',
                })}
            >Users</NavLink></li>
            {user &&
                <li><NavLink onClick={handleLogout} to='/login' className="nav-bar-link"
                    style={({ isActive }) => ({
                        color: isActive ? 'red' : '#545e6f',
                        // background: isActive ? '#7600dc' : '#f0f0f0',
                        // paddingRight: "20px"
                    })}
                >Logout</NavLink></li>
            }
            </ul>
        </div>
    );
}

export default Menu;