const { Router } = require('express');

const UserController = require('./src/app/Controllers/UserController');
const ProjectController = require('./src/app/Controllers/ProjectController');
const authMiddlware = require("./src/middleware/auth");


const routes = new Router();

routes

        .post("/registerUser", UserController.register)
        .post("/auth", UserController.autenticate)

        .get("/getProject",authMiddlware ,ProjectController.getProject)
        .get("/",(req, res )=>{
            return res.status(200).send({ message : "ok"})
        })

module.exports = routes;