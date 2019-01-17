import React, { Component, Fragment } from 'react'
import style from './style.less'

class Login extends Component {
    render() {
        return(
            <div className={ style.loginFormWrapper } >
                <form className={ style.loginForm }>
                    <h3>Login</h3>
                    <input type="text" ref="username" placeholder="Enter Your Username" />
                    <input type="password" ref="password" placeholder="Enter Password" />
                    <input type="submit" value="Login" className={ style.submitButton } />
                </form>
            </div>
        )
    }
}

export default Login