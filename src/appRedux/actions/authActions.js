import {
    SIGNIN_USER_SUCCESS,
    SIGNIN_USER_ERROR,
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_ERROR,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_ERROR,
    RESET_PASSWORD_ERROR,
    RESET_PASSWORD_SUCCESS
} from "../constants";
import axios from 'axios';

let url = process.env.REACT_APP_API_URL || "http://localhost:3000/api";
let token = JSON.parse(localStorage.getItem('auth_token'));

export const getAuthToken = () => {
    if (token) {
        return token;
    } else {
        return null
    }
}

export const signInUser = (email, password, rememberMe) => {
    const body = { email, password, rememberMe }
    return (dispatch) => {
        axios.post(`${url}/auth/login`, body)
            .then(resp => {
                if (resp.status === 200) {
                    return dispatch({ type: SIGNIN_USER_SUCCESS, payload: resp.data })
                }
                else {
                    return dispatch({ type: SIGNIN_USER_ERROR, payload: resp.data })
                }
            })
            .catch(err => {
                return dispatch({ type: SIGNIN_USER_ERROR, payload: err.response })

            })
    }
}

export const signUpUser = (firstNAme, lastName, email, password) => {
    const body = { firstNAme, lastName, email, password }
    return (dispatch) => {
        axios.post(`${url}/auth/signup`, body)
            .then(resp => {
                if (resp.status === 200) {
                    return dispatch({ type: SIGNUP_USER_SUCCESS, payload: resp.data })
                } else {
                    return dispatch({ type: SIGNUP_USER_ERROR, payload: resp.data })
                }
            })
            .catch(err => {
                return dispatch({ type: SIGNUP_USER_ERROR, payload: err.response })
            })
    }
}

export const forgotPassword = (email) => {
    const body = { email }
    return (dispatch) => {
        axios.post(`${url}/auth/forgotpassword`, body)
            .then(resp => {
                if (resp.status === 200) {
                    return dispatch({ type: FORGOT_PASSWORD_SUCCESS, payload: resp.data })
                } else {
                    return dispatch({ type: FORGOT_PASSWORD_ERROR, payload: resp.data })
                }
            })
            .catch(err => {
                return dispatch({ type: FORGOT_PASSWORD_ERROR, payload: err.response })
            })
    }
}

export const resetpassword = (email) => {
    const body = { email }
    return (dispatch) => {
        axios.post(`${url}/auth/resetpassword`, body)
            .then(resp => {
                if (resp.status === 200) {
                    return dispatch({ type: RESET_PASSWORD_SUCCESS, payload: resp.data })
                } else {
                    return dispatch({ type: RESET_PASSWORD_ERROR, payload: resp.data })
                }
            })
            .catch(err => {
                return dispatch({ type: RESET_PASSWORD_ERROR, payload: err.response })
            })
    }
}