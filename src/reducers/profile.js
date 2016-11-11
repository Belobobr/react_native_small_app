import {PROFILE_LOADING, PROFILE_LOADING_ERROR, PROFILE_LOADED} from './../constants/actionTypes'

const initialState = {
    data: {},
    loading: false,
    error: false,
};

function profileState(state = initialState, action) {
    switch (action.type) {
        case PROFILE_LOADING:
            return Object.assign({}, state, {
                loading: true,
                error: false,
                data: {}
            });
        case PROFILE_LOADING_ERROR:
            return Object.assign({}, state, {
                loading: false,
                error: true,
                data: {}
            });
        case PROFILE_LOADED:
            return Object.assign({}, state, {
                loading: false,
                error: false,
                data: action.profile,
            });
        default:
            return state
    }
}

export default profileState