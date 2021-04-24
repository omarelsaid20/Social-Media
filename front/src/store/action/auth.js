import * as actionTypes from './actionTypes';
import axios from 'axios';

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
};

export const authSuccess = (authData) => {
    return {
        type: actionTypes.AUTH_SUCCESS,
        authData: authData
    }
};

export const authFail = (err) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: err
    }
};

export const auth = (userName, country, email, password) => {
    return dispatch => {
        dispatch(authStart());
        let bodyFormData = new FormData();
        bodyFormData.append('userName', userName);
        bodyFormData.append('country', country);
        bodyFormData.append('email', email);
        bodyFormData.append('password', password);
        axios({
            method: "post",
            url: "http://localhost:8080/user-signup",
            data: bodyFormData,
            headers: { "Content-Type": "multipart/form-data" },
        })
            .then(response => {
                dispatch(authSuccess(response.data));
                console.log(response);
            })
            .catch(err => {
                try{
                    dispatch(authFail(err.response.data.errors));
                } catch (err) {
                    console.log( 'server is not Connected' ,err)
                }
                // console.log(err.response.data)
            })
    }
}