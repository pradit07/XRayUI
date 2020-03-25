import {
    MACHINESTOP,
    MACHINERESUME,
    LOADDATA,
    SAVEDATA,
    RESET, LOGOUT_SUCCESS
} from '../constants/actionType';

var initialState = {
    machinestatus: 'normal',
    displaydata: [],
    open: false,
    save: false,
    savedata: []
}

export default function (state, action) {
    state = state || initialState;

    switch (action.type) {
        case RESET:
            return Object.assign({}, state, {
                machinestatus: 'normal',
                open: false,
                save: false,
                displaydata: [],
                savedata: []
            });

        case MACHINESTOP:
            return Object.assign({}, state, {
                machinestatus: 'stop',
                open: true,
                save: false,
            });

        case LOADDATA:
            return Object.assign({}, state,{
                machinestatus: 'loading',
                displaydata: action.result,
                open: false,
                save: false,
                savedata: []
            });

        case MACHINERESUME:
            return Object.assign({}, state,{
                machinestatus: 'close',
                open: false,
                save: false,
                savedata: []
            });

        case SAVEDATA:
            let saveData = [...state.savedata];
            if (saveData.length === 0) {
                saveData = action.data;
            } else {
                saveData = [...saveData, ...action.data];
            }
            return Object.assign({}, state,{
                machinestatus: 'saved',
                open: true,
                save: true,
                savedata: saveData
            });
        case LOGOUT_SUCCESS:
            return Object.assign({}, {}, initialState);
        default:
            return state;
    }
}
