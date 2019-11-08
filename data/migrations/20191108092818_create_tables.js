
exports.up = function(knex) {
    return knex.schema
      .createTable('projects', tbl => {
          tbl.increments();
          tbl.string('name', 200)
              .notNullable();
          tbl.string('description', 500)
              .notNullable();
          tbl.boolean('completed')
              .defaultTo(0);
      })
      .createTable('resources', tbl => {
          tbl.increments();
          tbl.string('name', 200)
              .unique()
              .notNullable();
          tbl.string('description', 500)
              .notNullable();
      })
      .createTable('tasks', tbl => {
          tbl.increments();
          tbl.string('description', 500)
              .notNullable();
          tbl.text('notes')
          tbl.boolean('completed')
              .defaultTo(0);
          tbl.integer('projects_id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('projects')
              .onUpdate('CASCADE')
              .onDelete('CASCADE');
      })
      .createTable('projects_resources', tbl => {
          tbl.increments();
          tbl.integer('projects_id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('projects')
              .onUpdate('CASCADE')
              .onDelete('CASCADE');
          tbl.integer('resources_id')
              .unsigned()
              .notNullable()
              .references('id')
              .inTable('resources')
              .onUpdate('CASCADE')
              .onDelete('CASCADE');
      })
  };
  
  exports.down = function(knex) {
    return knex.schema
      .dropTableIfExists('projects_resources')
      .dropTableIfExists('tasks')
      .dropTableIfExists('resources')
      .dropTableIfExists('projects')
  };
  