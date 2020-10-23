import { combineReducers } from 'redux';
import auth_reducer from './AuthReducer';
const allReducers = combineReducers({
    auth: auth_reducer,
})
export default allReducers