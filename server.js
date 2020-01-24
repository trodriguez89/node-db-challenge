const express = require("express");
const helmet = require("helmet");

const ProjectRouter = require("./projects/projects-router");
const ResourceRouter = require("./resources/resources-router");
const PRrouter = require("./projects_resources/PR-Router");

const server = express();

server.use(helmet());
server.use(express.json());

server.use("/api/projects", ProjectRouter);
server.use("/api/resources", ResourceRouter);
server.use("/api/projects-resources", PRrouter);

module.exports = server;