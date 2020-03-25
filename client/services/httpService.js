import { save, getThreats } from '../utils/httpUtil';
import {getLocalStorage} from "../utils/storageUtil";

export function log(data) {
    const userId = getLocalStorage('userid');
    return save(data, userId);
}

export function loadThreats() {
    const userId = getLocalStorage('userid');
    return getThreats(userId);
}
