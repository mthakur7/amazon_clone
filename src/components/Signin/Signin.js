import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { useState } from 'react';
import { auth } from '../firebase';
import './Signin.css'

const Signin = () => {
    const history = useHistory();
    const [email, setEmail] = useState("demo@amazon.com");
    const [password, setPassword] = useState("Demo@123");


    const signIn = (e) => {
        e.preventDefault();
        //to sigin using firebase  
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert(error.message))
    }

    const register = (e) => {
        e.preventDefault();

        //to register using firebase
        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {
                // it successfully created a new user with email and password
                if (auth) {
                    history.push('/')
                }
            })
            .catch(error => alert(error.message))
    };

    return (
        <div className="signin">
            <Link to="/">   <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png" alt="" /></Link>

            <div className="signin_box">

                <h1>Sign in</h1>
                <form>
                    <label htmlFor="email">E-mail</label>
                    <input type="email" id="email" value={email} onChange={e => setEmail(e.target.value)} />
                    <label htmlFor="password">Password</label>
                    <input type="password" id="password" value={password} onChange={e => setPassword(e.target.value)} />
                    <button className="signin_btn" type="submit" onClick={signIn}>Sign In</button>
                    <span>By signing-in you agree to Amazon's Conditions of Use & Sale. Please see our Privacy Notice, our Cookies Notice and our Interest-Based Ads Notice.</span>
                    <button className="signin_createbtn" onClick={register}>Create your Amazon account</button>
                </form>
            </div>





        </div>
    )
}
export default Signin;
