import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer';
import logo1 from './logo1.jpg'
import google from './google.png'

function Login() {
    const [state, dispatch] = useStateValue();

    const signIn = event => {
        auth.signInWithPopup(provider)
        .then(res => {
            console.log(res)
            dispatch({
                type: actionTypes.SET_USER,
                user: res.user
            })
        })
        .catch(err => alert(err.message))
    }

    return (
        <div className="login">
            <div className="login__container"> 
                <h1>LOGIN</h1>
                <img src={logo1} alt="" />
                <p></p>
                <Button onClick={signIn}>
                    <img className="loginButton__logo" src={google} alt="" />
                    Continue with Google
                </Button>
            </div>
        </div>
    )
}

export default Login
