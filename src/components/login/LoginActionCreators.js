import * as actions from './LoginActions'
import { USER } from './../../utils/constants'

export const login = ( data ) => {
    debugger
    return (dispatch) => {
        dispatch(actions.requestLogin())
        if( data.user === USER.name && data.password === USER.password ) {
            dispatch(actions.responseLogin( data.user ))
        } else {
            dispatch(actions.requestLoginFailure('Incorrect Username or Password!'))
            
            setTimeout(() => {
                dispatch(actions.requestLoginFailure(''))
            }, 2000);
        }
    };
}