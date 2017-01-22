exports.up = function(knex, Promise) {
  return knex.schema.createTableIfNotExists('topics', function (table) {
    table.increments();
    table.string('content');
    table.string('source');
    table.string('media_type');
    table.string('category');
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('topics');
};
