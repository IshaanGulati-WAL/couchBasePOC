const Model = require('./index');

class Machine extends Model {
    static get tableName(){
        return 'machines';
    }

    static get idColumn(){
        return 'id';
    }
}

module.exports = exports = Machine;
