import bookshelf from '../config/bookshelf';

const TABLE_NAME = 'threats';

class Threat extends bookshelf.Model {

    get tableName() {
        return TABLE_NAME;
    }

    get hasTimestamps() {
        return true;
    }
}

export default Threat;