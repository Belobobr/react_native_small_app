import {PROFILE_LOADING, PROFILE_LOADED, PROFILE_LOADING_ERROR} from './../constants/actionTypes';
import {GraphRequest, GraphRequestManager} from 'react-native-fbsdk';

export function loadProfile() {
    return (dispatch, getState) => {
        const accessToken = getState().session.accessToken;
        if (accessToken != null) {
            dispatch(handleProfileLoading());

            const profileRequestParams = {
                fields: {
                    string: 'id, email, first_name, last_name, picture, cover, about, middle_name'
                }
            };

            const profileRequestConfig = {
                httpMethod: 'GET',
                version: 'v2.8',
                parameters: profileRequestParams,
                accessToken: accessToken
            };

            const infoRequest = new GraphRequest(
                '/me',
                profileRequestConfig,
                responseInfoCallback.bind(null, dispatch),
            );
            // Start the graph request.
            new GraphRequestManager().addRequest(infoRequest).start();
        } else {
            dispatch(handleProfileLoadingError());
        }
    }
}

function responseInfoCallback(dispatch, error, result) {
    if (error) {
        dispatch(handleProfileLoadingError(error));
    } else {
        dispatch(handleProfileLoaded(result));
    }
}


function handleProfileLoading() {
    return {type: PROFILE_LOADING}
}

function handleProfileLoaded(profile) {
    return {type: PROFILE_LOADED, profile}
}

function handleProfileLoadingError(error) {
    return {type: PROFILE_LOADING_ERROR, error}
}

