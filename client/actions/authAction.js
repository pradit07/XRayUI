import axios from 'axios';

import { loginSuccess, loginFailure, logoutSuccess } from './commonAction';
import { setLocalStorage, clearLocalStorage } from '../utils/storageUtil';
import history from '../utils/history';

export function login({userid, password}) {
    return function(dispatch) {
        axios.post('auth/login', {userid, password})
        .then((response) => {
            var today = new Date();
            var date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
            var time = today.getHours() + ":" + ((today.getMinutes() < 10) ? "0" + today.getMinutes() : today.getMinutes());
            var dateTime = date+' '+time;
            var stoptime = '0'
            dispatch(loginSuccess(response.data.token));
            setLocalStorage('userid', response.data.userid);
            setLocalStorage('username', response.data.username);
            setLocalStorage('token', response.data.token);
            setLocalStorage('logIntime', dateTime)
            setLocalStorage('stopTime', stoptime)
            console.log('User log in at ' + dateTime)
            history.push('/main');
        })
        .catch((error) => {
            dispatch(loginFailure(error.response.data));
        });
    };
}

export function logout() {
    return function(dispatch) {
        clearLocalStorage('token');
        clearLocalStorage('userid');
        clearLocalStorage('username');
        clearLocalStorage('stopTime');
        clearLocalStorage('logIntime');
        dispatch(logoutSuccess());
        history.push('/');
        return false;
    };
}
