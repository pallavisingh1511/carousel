import { combineReducers } from 'redux'
import loginReducer from './components/login/LoginReducers'
import carouselReducer from './components/carousel/CarouselReducers'

export default combineReducers({
    loginReducer,
    carouselReducer
});