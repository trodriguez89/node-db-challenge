const express = require("express");

const Projects = require("./projects-model");

const router = express.Router();

//GET requests for projects
router.get("/", (req, res) => {
  Projects.getProjects()
    .then(projects => {
      res.json(projects)
    })
    .catch(error => {
      res.status(500).json({ errorMessage: "Error retrieving projects" })
    })
});

router.get("/:id", (req, res) => {
  const id = req.params.id;
  Projects.getProjectById(id)
    .then(project => {
      res.json(project)
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({ errorMessage: "Error retrieving project" })
    })
});

//GET requests for tasks for specific project
router.get("/:id/tasks", (req, res) => {
  const id = req.params.id;
  Projects.getProjectTasks(id)
    .then(tasks => {
      res.json(tasks)
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({ errorMessage: "Error retrieving tasks for this project" })
    })
});

//POST requests
router.post("/", (req, res) => {
  const body = req.body;
  Projects.newProject(body)
    .then(project => {
      res.json(project)
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({ errorMessage: "Error posting new project" })
    })
});

router.post("/:id/tasks", (req, res) => {
  const id = req.params.id;
  const body = req.body;
  Projects.getProjectById(id)
    .then(project => {
      if (project) {
        Projects.newTask(body, id)
          .then(task => {
            res.status(201).json(task)
          })
      } else {
        res.status(404).json({ message: "Could not find project with that specified ID" })
      }
    })
    .catch(error => {
      console.log(error)
      res.status(500).json({ errorMessage: "Error adding new task" })
    })
});



module.exports = router;