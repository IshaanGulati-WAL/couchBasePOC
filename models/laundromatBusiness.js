const Model = require('./index');

class LaundromatBusiness extends Model {
    static get tableName(){
        return 'laundromatBusiness';
    }

    static get idColumn(){
        return 'id';
    }
}

module.exports = exports = LaundromatBusiness;