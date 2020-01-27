
exports.up = function(knex) {
  return knex.schema.createTable('laundromatBusiness', function(table) {
      table.increments('id');
      table.integer('userId').notNullable();
      table.foreign('userId').references('id').inTable('users');
      table.string('name').notNullable();
      table.string('address');
      table.timestamp('createdAt').defaultTo(knex.fn.now());
      table.timestamp('updatedAt').defaultTo(knex.fn.now());
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('laundromatBusiness');
};
