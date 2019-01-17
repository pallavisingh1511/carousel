import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import * as ActionCreator from './LoginActionCreators'
import Profile from './../profile'
import style from './style.less'

class Login extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            user        :   '',
            password    :   '',
            error       :   ''
        }
    }
    _login() {
        const {
            user,
            password
        } = this.state

        let error = {}
        let isValid = user && password
        
        error['user'] = !user ? 'Username cannot be blank!' : ''
        error['password'] = !password ? 'Password cannot be blank!' : ''

        this.setState({
            error
        })

        if( isValid ) {
            this.props.dispatch(ActionCreator.login({
                user, password
            }))
        }
    }
    render() {
        const { user, error } = this.props
        return(
            <div className={ style.loginFormWrapper } >
                { !user ? 
                    <div className={ style.loginForm }>
                        <h3>Login</h3>
                        <input type="text"
                            placeholder="Enter Your Username"
                            value = { this.state.user }
                            onChange = {(e) => { this.setState({ user: e.target.value }) }}
                        />
                        <span className={ style.error }>{ this.state.error["user"] }</span>
                        <input type="password"
                            placeholder="Enter Password"
                            value={this.state.password}
                            onChange = {(e) => { this.setState({ password: e.target.value }) }}
                        />
                        <span className={ style.error }>{ this.state.error["password"] }</span>
                        <span className={ style.submitButton } onClick={ () => this._login() }>Login</span>
                        <span className={ style.error }>{ error }</span>
                    </div>
                    : <Profile user={ this.props.user } />
                }
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        user: state.loginReducer.user,
        isFetching: state.loginReducer.isFetching,
        error: state.loginReducer.error,
    }
}

export default connect( mapStateToProps )( Login )