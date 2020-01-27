const Model = require('./index');

class Pairing extends Model {
    static get tableName(){
        return 'pairing';
    }

    static get idColumn(){
        return 'id';
    }
}

module.exports = exports = Pairing;
