import {SESSION_AUTHORIZE, SESSION_UN_AUTHORIZE} from './../constants/actionTypes'
import {AsyncStorage} from 'react-native';

export const ACCESS_TOKEN = 'ACCESS_TOKEN';

const mainRoute = {
    type: 'reset',
    routes: [{
        key: 'main',
        title: 'Main'
    }]
};

const unAuthorizedRoutes = {
    type: 'reset',
    routes: [{
        key: 'login',
        title: 'Login'
    }]
};

export function authorize(accessToken, handleNavigate) {
    return (dispatch) => {
        if (accessToken != null) {
            AsyncStorage.setItem(ACCESS_TOKEN, accessToken, () => {
                dispatch(handleAuthorized(accessToken));
                handleNavigate(mainRoute);
            });
        }
    }
}

export function unAuthorize(handleNavigate) {
    return (dispatch) => {
        debugger;
        AsyncStorage.setItem(ACCESS_TOKEN, '', () => {
            debugger;
            dispatch(handleUnAuthorized());
            handleNavigate(unAuthorizedRoutes);
        });
    }
}

function handleUnAuthorized() {
    return {type: SESSION_UN_AUTHORIZE}
}

function handleAuthorized(accessToken) {
    return {type: SESSION_AUTHORIZE, accessToken}
}
