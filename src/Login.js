import React from 'react'
import './Login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider'
import { actionTypes } from './reducer';

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
                <img src="" alt="" />
                <h1>Sign In</h1>
                <Button onClick={signIn}>SIGN IN WITH GOOGLE</Button>
            </div>
        </div>
    )
}

export default Login
