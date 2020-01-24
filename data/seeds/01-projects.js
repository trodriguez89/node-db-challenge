
exports.seed = function (knex) {
  // Deletes ALL existing entries
  return knex('projects').insert([
    {
      project_name: "Learn JavaScript",
      completed: false
    },
    {
      project_name: "Learn React",
      completed: false
    }
  ])
};
