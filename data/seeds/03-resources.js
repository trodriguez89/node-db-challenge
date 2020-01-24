
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('resources').insert([
    {
      resource_name: "Online Vids on JavaScript; Front-End Masters, Lambda School",
      description: "Bootcamp vids on JavaScript that teach you the concepts."
    },
    {
      resource_name: "Lambda School - React portion",
      description: "Lambda School has an extensive program on React and advanced React"
    }
  ])
};
