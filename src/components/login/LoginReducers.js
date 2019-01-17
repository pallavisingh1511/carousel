import * as types from './LoginActionTypes'

const initialState = {
    user: '',
    isFetching: false,
    error: ''
}

export default function loginReducer(state = initialState, action) {
    switch (action.type) {
        case types.REQUEST_LOGIN:
            return Object.assign({}, state, {
                isFetching: true,
                error: '',
            })
        case types.RESPONSE_LOGIN:
            return Object.assign({}, state, {
                isFetching: false,
                error: '',
                user: action.payload.data,
            })
        case types.FAILURE_LOGIN:
            return Object.assign({}, state, {
                isFetching: false,
                error: action.error,
                user: ''
            })

        default:
            return state
    }
}