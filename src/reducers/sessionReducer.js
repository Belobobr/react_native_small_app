import {LOGIN, LOGOUT} from './../constants/actionTypes'

const initialState = {
    accessToken: null,
};

function sessionState(state = initialState, action) {
    switch (action.type) {
        case LOGIN:
            return Object.assign({}, state, {accessToken: action.accessToken});
        case LOGOUT:
            return Object.assign({}, state, {accessToken: null});
        default:
            return state
    }
}

export default sessionState