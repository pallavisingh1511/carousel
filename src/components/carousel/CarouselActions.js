import * as types from './CarouselActionTypes'

export const updateSelection =  ( data ) => {
	return {
		type: types.UPDATE_SELECTION,
		payload: {
			data
		}
	}
}
