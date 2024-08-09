import React, { useState } from 'react';
import './loginPage.css';
import { useAuth } from '../routes/privateRoute';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const [user, setUser] = useState('');
    const auth = useAuth();
    const navigate = useNavigate();
    const handleLogin = () => {
        if (user) {
            auth.login(user);
            localStorage.setItem("user", user);
            navigate("/home");
        }
    }
    return (
        <div id="loginform">
            <FormHeader title="Login" />
            <div className="row">
                <label>Username: {user}</label>
                <input onChange={(e) => setUser(e.target.value)} type="text" placeholder="Enter your username" />
            </div>
            <div className="row">
                <label>Password</label>
                <input type="text" placeholder="Enter your password" />
            </div>
            <div id="button" className="row">
                <button type='button' onClick={handleLogin}>Log in</button>
            </div>
            <OtherMethods />
        </div>
    )
}
export default LoginPage;

const FormHeader = props => (
    <h2 id="headerTitle">{props.title} {process.env.TYPE}</h2>
);


const Form = props => (
    <div>
        <FormInput description="Username" placeholder="Enter your username" type="text" />
        <FormInput description="Password" placeholder="Enter your password" type="password" />
        <FormButton title="Log in" />
    </div>
);

const FormButton = props => (
    <div id="button" className="row">
        <button>{props.title}</button>
    </div>
);

const FormInput = props => (
    <div className="row">
        <label>{props.description}</label>
        <input type={props.type} placeholder={props.placeholder} />
    </div>
);

const OtherMethods = props => (
    <div id="alternativeLogin">
        <label>Or sign in with:</label>
        <div id="iconGroup">
            <Facebook />
            <Twitter />
            <Google />
        </div>
    </div>
);

const Facebook = props => (
    <a href="#" id="facebookIcon"> Reset Password</a>
);

const Twitter = props => (
    <a href="#" id="twitterIcon"></a>
);

const Google = props => (
    <a href="#" id="googleIcon"></a>
);