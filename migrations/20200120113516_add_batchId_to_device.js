
exports.up = function(knex) {
  return knex.schema.table('devices', function(table) {
      table.integer('batchId');
      table.foreign('batchId').references('id').inTable('batches');
  });
};

exports.down = function(knex) {
  return knex.schema.table('devices', function(table) {
      table.dropColumn('batchId');
  });
};
