
exports.up = function (knex) {
  return knex.schema.createTable("projects", tbl => {
    tbl.increments();
    tbl.string("project_name", 255)
      .notNullable().unique()
    tbl.boolean("completed")
    .defaultTo(false);
  })
  .createTable("tasks", tbl => {
    tbl.increments();
    tbl.string("task_name", 255)
    .notNullable();
    tbl.string("description", 255)
    .notNullable();
    tbl.boolean("completed")
    .defaultTo(false)
    tbl.integer("project_id")
    .unsigned()
    .notNullable()
    .references("id")
    .inTable("projects")
  })
  .createTable("resources", tbl => {
    tbl.increments();
    tbl.string("resource_name", 255)
    .notNullable();
    tbl.string("description", 255)
    .notNullable();
  })
  .createTable("projects_resources", tbl => {
    tbl.primary(["project_id", "resource_id"])
    tbl.integer("project_id")
    .notNullable()
    .references("id")
    .inTable("projects");
    tbl.integer("resource_id")
    .notNullable()
    .references("id")
    .inTable("resources");
  })
};

exports.down = function (knex) {
  return knex.schema
  .dropTableIfExists("projects_resources")
  .dropTableIfExists("resources")
  .dropTableIfExists("projects")
};
