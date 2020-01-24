const express = require("express");
const helmet = require("helmet");

const ProjectRouter = require("./projects/projects-router");
const TaskRouter = require("./tasks/tasks-router");
const ResourceRouter = require("./resources/resources-router");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/projects", ProjectRouter);
// server.use("/api/tasks", TaskRouter);
// server.use("/api/resources", ResourceRouter);

module.exports = server;