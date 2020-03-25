import {
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
    LOGOUT_SUCCESS,
    FAILURE,
    MACHINERESUME,
    MACHINESTOP,
    LOADDATA,
    SAVEDATA
} from '../constants/actionType';
import * as httpService from "../services/httpService";

export function failure(error) {
    return {
        type: FAILURE,
        error: error
    }
};

export function loginSuccess(data) {
    return {
        type: LOGIN_SUCCESS,
        data
    };
};

export function machineHalted(result) {
    return {
        type: MACHINESTOP,
        result,
    };
};

export function loadData() {
    return function(dispatch) {
        httpService.loadThreats().then(response => {
            console.log(response.data);
            dispatch(loadDataSuccess(response.data));
        }).catch(error => {
            console.log(error);
        });
    };
}

export function loadDataSuccess(result) {
    return {
        type: LOADDATA,
        result,
    };
}

export function saveData(data) {
    return {
        type: SAVEDATA,
        data
    }
}

export function machineResume(result) {
    return {
        type: MACHINERESUME,
        result
    }
}

export function loginFailure(error) {
    return {
        type: LOGIN_FAILURE,
        error
    };
};

export function logoutSuccess() {
    return {
        type: LOGOUT_SUCCESS
    };
};
