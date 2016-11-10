import {PUSH_ROUTE, POP_ROUTE, RESET_ROUTES} from './../constants/actionTypes'
import {NavigationExperimental} from 'react-native'
const {
    StateUtils: NavigationStateUtils
} = NavigationExperimental;

const initialState = {
    index: 0,
    key: 'root',
    routes: [
        {
            key: 'splash',
            title: 'Login'
        }
    ]
};

function navigationState(state = initialState, action) {
    switch (action.type) {
        case PUSH_ROUTE:
            console.log('state: ', state);
            console.log('action: ', action);
            if (state.routes[state.index].key === (action.route && action.route.key)) {
                return state;
            }
            return NavigationStateUtils.push(state, action.route);
        case POP_ROUTE:
            if (state.index === 0 || state.routes.length === 1) {
                return state;
            }
            return NavigationStateUtils.pop(state);
        case RESET_ROUTES:
            return NavigationStateUtils.reset(state, action.routes, action.index);
        default:
            return state
    }
}

export default navigationState