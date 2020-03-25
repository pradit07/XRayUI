import bookshelf from '../config/bookshelf';
import Threat from "./threat.model";

const TABLE_NAME = 'users';

class User extends bookshelf.Model {

    get tableName() {
        return TABLE_NAME;
    }

    verifyPassword(password) {
        return this.get('password') === password;
    }

    get threats() {
        return this.hasMany(Threat);
    }
}

export default User;
