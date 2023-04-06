import React, { useState } from 'react'
import './Login.scss'
import { ReactComponent as AppleLogo } from './../../assets/images/apple.svg'
import { ReactComponent as GoogleLogo } from './../../assets/images/google.svg'
import { useNavigate } from 'react-router-dom'
const Login = () => {
    const navigate = useNavigate();
    const handleSignIn = () => {
        navigate('/dashboard')
    }
    const [email, setEmail] = useState('example@example.com')
    const [password, setPassword] = useState('')
    return (
        <div className='login'>
            <div className="sideLogo__container">
                <div className='sideLogo__title' >Board.</div>
            </div>
            <div className="login__content">
                <div className="login__heading">
                    Sign In
                </div>
                <div className="login__subheading">
                    Sign in to your account
                </div>
                <div className="login__accounts">
                    <div className="login__accounts__google"><GoogleLogo /> <span className="login__accounts__google__text"> Sign in with Google</span> </div>
                    <div className="login__accounts__apple"><AppleLogo /> <span className="login__accounts__apple__text"> Sign in with Apple</span> </div>
                </div>
                <div className="login__form__container">
                    <div className="login__form">
                        <div className="container">
                            <label htmlFor="loginemail">Email address</label>
                            <input type="email" name="loginemail" id="loginemail" value={email} onChange={(e) => { setEmail(e.target.value) }} />
                        </div>
                        <div className="container">
                            <label htmlFor="loginpass">Password</label>
                            <input type="email" name="loginpass" id="loginpass" />
                        </div>
                        <div className="login__form__forgotpass">
                            Forgot password?
                        </div>
                        <div className="login__form__submit" onClick={handleSignIn}>
                            Sign in
                        </div>
                    </div>
                </div>
                <div className="register">
                    <span className='text-blue'>
                        <span className="text-muted">
                            Don't have an account?
                        </span> Register here
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Login