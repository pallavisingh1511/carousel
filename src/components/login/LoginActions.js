import * as types from './LoginActionTypes'

export const requestLogin =  () => {
	return {
		type: types.REQUEST_LOGIN
	}
}

export const responseLogin =  ( data ) => {
	return {
		type: types.RESPONSE_LOGIN,
		payload: {
			data
		}
	}
}

export const requestLoginFailure =  ( error ) => {
	return {
        type: types.FAILURE_LOGIN,
        error
	}
}
