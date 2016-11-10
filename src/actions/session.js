import {AUTHORIZED} from './../constants/actionTypes'
import {pushRoute} from './navigation';

const mainRoute = {
    type: 'push',
    route: {
        key: 'main',
        title: 'Main'
    }
};

export function authorize(accessToken) {
    return (dispatch) => {
        // dispatch(authorize(accessToken));
        dispatch(pushRoute(mainRoute));
    }
}

function authorized(accessToken) {
    return {type: AUTHORIZED, accessToken}
}
