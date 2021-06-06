const { Router } = require('express');

const UserController = require('./src/app/Controllers/UserController');
const ProjectController = require('./src/app/Controllers/ProjectController');
const authMiddlware = require("./src/middleware/auth");


const routes = new Router();

routes

        .post("/registerUser", UserController.register)
        .post("/auth", UserController.autenticate)

        .get("/",authMiddlware,ProjectController.getProjects)
        .get("/:projectId",authMiddlware ,ProjectController.getProject)
        .post("/createProject",authMiddlware,ProjectController.createProduct)
        .put("/:productId",authMiddlware,ProjectController.updateProject);

module.exports = routes;