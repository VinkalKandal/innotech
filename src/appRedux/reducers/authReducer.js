import {
    SIGNUP_USER_SUCCESS,
    SIGNUP_USER_ERROR,
    SIGNIN_USER_SUCCESS,
    SIGNIN_USER_ERROR,
    FORGOT_PASSWORD_SUCCESS,
    FORGOT_PASSWORD_ERROR,
    RESET_PASSWORD_SUCCESS,
    RESET_PASSWORD_ERROR
} from '../constants'

const initialState = {
    authSuccess: '',
    authError: '',
    logOutSuccess: ''
}

export default function authReducer(state = initialState, action) {
    switch (action.type) {
        case SIGNUP_USER_SUCCESS:
            return { ...state, signUpUser: action.payload }
        case SIGNUP_USER_ERROR:
            return { ...state, signUpUser: action.payload }
        case SIGNIN_USER_SUCCESS:
            return { ...state, signInUser: action.payload }
        case SIGNIN_USER_ERROR:
            return { ...state, signInUser: action.payload }
        case FORGOT_PASSWORD_SUCCESS:
            return { ...state, forgotPassword: action.payload }
        case FORGOT_PASSWORD_ERROR:
            return { ...state, forgotPassword: action.payload }
        case RESET_PASSWORD_SUCCESS:
            return { ...state, resetPassword: action.payload }
        case RESET_PASSWORD_ERROR:
            return { ...state, resetPassword: action.payload }
        default:
            return state
    }

}