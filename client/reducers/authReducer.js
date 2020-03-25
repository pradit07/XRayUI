import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_SUCCESS
} from '../constants/actionType';

const token = localStorage.getItem('token');
// console.log(token);
var initialState = {
    token: token,
    isAuthenticated: token !== null,
    isLoading: false
};

export default function (state, action) {
    state = state || initialState;

    switch (action.type) {
        case LOGIN_SUCCESS:
            return Object.assign({}, state, {
                isAuthenticated: true,
                isLoading: false,
                token: action.data,
                errorMessage: null
            });

        case LOGIN_FAILURE:
            return Object.assign({}, state, {
                isAuthenticated: false,
                isLoading: false,
                token: null,
                errorMessage: action.error.message || 'Something went wrong.'
            });

        case LOGOUT_SUCCESS:
            return Object.assign({}, state, {
                isAuthenticated: false,
                isLoading: true,
                token: null
            });

        default:
            return state;
    }
}
