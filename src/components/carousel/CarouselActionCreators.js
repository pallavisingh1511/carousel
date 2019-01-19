import * as actions from './CarouselActions'

export const update = ( data ) => {
    return (dispatch) => {
        dispatch(actions.updateSelection( data.selectedValue ))
    };
}