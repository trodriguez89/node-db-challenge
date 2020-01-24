const express = require("express");

const Resources = require("./resources-model");

const router = express.Router();

// GET requests for RESOURCES
router.get("/", (req, res) => {
    Resources.getResources()
    .then(resources => {
        res.json(resources)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({errorMessage: "Error retrieving resources"})
    })
});

// POST requests
router.post("/", (req, res) => {
    const body = req.body;
    Resources.newResource(body)
    .then(resource => {
        res.json(resource)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({errorMessage: "Error adding new resource"})
    })
});

module.exports = router;