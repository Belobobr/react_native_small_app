import {LOGIN, LOGOUT} from './../constants/actionTypes'
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
                dispatch(authorized(accessToken));
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
            dispatch(handleLogout());
            handleNavigate(unAuthorizedRoutes);
        });
    }
}

function handleLogout() {
    return {type: LOGOUT}
}

function authorized(accessToken) {
    return {type: LOGIN, accessToken}
}
