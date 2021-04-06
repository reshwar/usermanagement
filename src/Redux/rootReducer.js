import { combineReducers } from 'redux'
import userReducer from './userReducer'
import {reducer as formReducer} from 'redux-form';
const rootReducer  = combineReducers({
    userReducer,
    formReducer
    
})

export default rootReducer