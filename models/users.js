const Model = require('./index');

class User extends Model {
    static get tableName(){
        return 'users';
    }

    static get idColumn(){
        return 'id';
    }
}

module.exports = exports = User;

