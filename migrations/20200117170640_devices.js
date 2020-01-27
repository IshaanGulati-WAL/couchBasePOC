
exports.up = function(knex) {
  return knex.schema.createTable('devices', function(table) {
      table.increments('id');
      table.string('name').notNullable().unique();
      table.text('privateKey').notNullable().unique();
      table.integer('businessId').notNullable();
      table.foreign('businessId').references('id').inTable('laundromatBusiness');
      table.integer('storeId');
  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('devices')
};
