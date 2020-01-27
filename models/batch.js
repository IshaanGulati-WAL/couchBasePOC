const Model = require('./index');

class Batch extends Model {
    static get tableName(){
        return 'batches';
    }

    static get idColumn(){
        return 'id';
    }
}

module.exports = exports = Batch;