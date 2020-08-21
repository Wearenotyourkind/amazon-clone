import React from "react";
import "./Login.css";
import {Link,useHistory} from "react-router-dom";



function Login(){

    const login =e =>{
        e.preventDefault();

        //do the login logic

    };

    const register= event=>{
        event.preventDefault()
;    }

    return(
        <div className="login">
            <Link to="/">
                <img className='login__logo'
                     src='https://1000logos.net/wp-content/uploads/2016/10/Amazon-Logo.png'
                     alt=''/>
            </Link>

            <div className='login__container'>
                <h1>Sign In</h1>
                <form>
                    <h5>Email</h5>
                    <input type='text'/>
                    <h5>Password</h5>
                    <input type='password'/>
                    <button onClick={register} type='submit' className='login__signInButton'>Sign In</button>
                    <p>이용약관 어쩌구 저쩌구~~~~</p>
                    <button className='login__registerButton'>Create your Amazon Account</button>

                </form>

            </div>

        </div>
    );
}

export default Login;
