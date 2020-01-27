const Model = require('./index');

class Store extends Model {
    static get tableName(){
        return 'stores';
    }

    static get idColumn(){
        return 'id';
    }
}

module.exports = exports = Store;
