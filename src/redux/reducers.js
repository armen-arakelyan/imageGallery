import {combineReducers} from 'redux';
import imgGallery from './imgGallery/reducer';

const rootReducer=combineReducers({
    img:imgGallery
})

export default rootReducer