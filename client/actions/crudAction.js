import * as httpService from '../services/httpService';
import store  from '../reducers/store/store';
import io from 'socket.io-client';
// import { RESET } from '../constants/actionType';

//let socket = io.connect("http://192.168.1.135:7000");
let socket = io.connect("localhost:7000");

// function reset() {
//     return {
//         type: RESET
//     }
// }

export function send() {
    socket.emit('close', 'close')
}

export function usb(data) {
    if ((data.data === 'q') || (data.data === 's')) {
        // if (store.getState().mach.machinestatus === 'close') {
        //     socket.emit('close', 'close')
        //     store.dispatch(reset())
        // }
    }
    let shellusb = `echo '` + data.data + `' | sudo ./hardpass-sendHID-master/scan /dev/hidg0 1 3`;
    socket.emit('passcmd', shellusb)
}

export function log(threats) {
    return function(dispatch) {
        return httpService.log(threats)
        .catch((error) => {
            dispatch(commonAction.failure(error))
        });
    };
}