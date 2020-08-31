import React from 'react'
import './login.css'
import { Button } from '@material-ui/core'
import { auth, provider } from './firebase'
import { useStateValue } from './StateProvider'
import { actions } from './reducer'

function Login() {

    const [{}, dispatch ] = useStateValue();

    const signIn = () =>{
        auth.signInWithPopup(provider)
        .then(result => {
            // console.log("Login -->>"+result.user)
            dispatch({
                type: actions.SET_USER,
                payload: result.user
            })
        })
        .catch(err => alert(err.message))
    }

    return (
        <div className="login">
            <div className="login_container">
                <img src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" alt="whatsapp_logo" />
                <div className="login_text">
                    <h1>Sign in to Whatsapp</h1>
                </div>
                <Button onClick={signIn}>
                    Sign in using Google
                </Button>
            </div>
        </div>
    )
}

export default Login
