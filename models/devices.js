const Model = require('./index');

class Device extends Model {
    static get tableName(){
        return 'devices';
    }

    static get idColumn(){
        return 'id';
    }
}

module.exports = exports = Device;