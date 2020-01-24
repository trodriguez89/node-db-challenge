
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('tasks').insert([
    {
      task_name: "Study Study Study",
      description: "Set aside time everyday to study.",
      completed: false,
      project_id: 1
    },
    {
      task_name: "Practice coding",
      description: "Practice coding. Do JavaScript Problems",
      completed: false,
      project_id: 1
    },
    {
      task_name: "Watch React Tutorials",
      description: "Watch Intro to React Tutorials",
      completed: false,
      project_id: 2
    },
    {
      task_name: "Practice coding in React",
      description: "Learn React concepts, why everything works the way it does",
      completed: false,
      project_id: 2
    }
  ])
};
