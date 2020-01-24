const express = require("express");

const Projects = require("./projects-model");

const router = express.Router();

//GET requests
router.get("/", (req, res) => {
    Projects.getProjects()
    .then(projects => {
        res.json(projects)
    })
    .catch(error => {
        res.status(500).json({errorMessage: "Error retrieving projects"})
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
        res.status(500).json({errorMessage: "Error retrieving project"})
    })
});

//POST requests
router.post("/", (req, res) => {
    
})

module.exports = router;