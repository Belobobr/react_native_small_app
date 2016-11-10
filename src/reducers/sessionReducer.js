import {AUTHORIZED} from './../constants/actionTypes'

const initialState = {
    accessToken: null,
};

function sessionState(state = initialState, action) {
    switch (action.type) {
        case AUTHORIZED:
            return Object.assign({}, state, {accessToken: action.accessToken});
        default:
            return state
    }
}

export default sessionState