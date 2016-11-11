import {combineReducers} from 'redux'
import navigation from './navigation'
import session from './session';
import profile from './profile';

const rootReducer = combineReducers({
    navigation,
    session,
    profile,
});

export default rootReducer