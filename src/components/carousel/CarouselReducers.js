import * as types from './CarouselActionTypes'

const initialState = {
    selection: [],
}

export default function carouselReducer(state = initialState, action) {
    switch (action.type) {
        case types.UPDATE_SELECTION:
            return Object.assign({}, state, { 
                   selection: state.selection.concat(action.payload.data)
                })

        default:
            return state
    }
}