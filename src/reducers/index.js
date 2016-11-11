import {combineReducers} from 'redux'
import navigation from './navigation'
import session from './session';
import profile from './profile';
import items from './items';

const rootReducer = combineReducers({
    navigation,
    session,
    profile,
    items,
});

export default rootReducer