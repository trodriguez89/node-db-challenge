const express = require("express");

const PR = require("./PR-model");

const router = express.Router();

// GET requests
router.get("/", (req, res) => {
    PR.getIds()
    .then(ids => {
        res.json(ids)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({errorMessage: "Error retrieving IDs"})
    })
});

// POST requests
router.post("/", (req, res) => {
    const body = req.body;
    PR.addIds(body)
    .then(newId => {
        res.status(201).json(newId)
    })
    .catch(error => {
        console.log(error)
        res.status(500).json({errorMessage: "Error adding IDs"})
    })
});

module.exports = router;