import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import { connectRouter } from 'connected-react-router';
import authReducer from './authReducer';
import machineReducer from './machineReducer';

const appReducer = (history) => combineReducers({
    router: connectRouter(history),
    form: formReducer,
    auth: authReducer,
    mach: machineReducer
})

const rootReducer = (state, action) => {
    if (action === 'LOGOUT_SUCCESS') {
        state = undefined;
    }
    return appReducer(state,action);
};

export default rootReducer;