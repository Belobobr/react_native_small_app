import {ITEMS_LOADING, ITEMS_LOADING_ERROR, ITEMS_LOADED, ITEMS_ADD, SESSION_UN_AUTHORIZE} from './../constants/actionTypes'

const initialState = {
    data: {},
    loading: false,
    error: false,
};

function itemsState(state = initialState, action) {
    switch (action.type) {
        case ITEMS_LOADING:
            return Object.assign({}, state, {
                loading: true,
                error: false,
                data: {}
            });
        case ITEMS_LOADING_ERROR:
            return Object.assign({}, state, {
                loading: false,
                error: true,
                data: {}
            });
        case ITEMS_LOADED:
            return Object.assign({}, state, {
                loading: false,
                error: false,
                data: action.items,
            });
        case ITEMS_ADD:
            debugger;
            return Object.assign({}, state, {
                data: state.data.concat(action.item),
            });
        case SESSION_UN_AUTHORIZE:
            return Object.assign({}, state, {
                data: {}
            });
        default:
            return state
    }
}

export default itemsState