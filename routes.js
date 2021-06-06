const { Router } = require('express');

const UserController = require('./src/app/Controllers/UserController');
const ProjectController = require('./src/app/Controllers/ProjectController');
const TemaController = require("./src/app/Controllers/TemaController");
const PostController = require("./src/app/Controllers/PostController");

const authMiddlware = require("./src/middleware/auth");


const routes = new Router();

routes

        .post("/registerUser", UserController.register)
        .post("/auth", UserController.autenticate)

        .get("/",authMiddlware,ProjectController.getProjects)
        .get("/:projectId",authMiddlware ,ProjectController.getProject)
        .post("/createProject",authMiddlware,ProjectController.createProduct)
        .put("/:productId",authMiddlware,ProjectController.updateProject)

        .post("/createTema",authMiddlware,TemaController.createTema)
        .get("/tema/:temaId",authMiddlware,TemaController.getTema)

        .post("/verificaUserPertence",authMiddlware,TemaController.verifyPertence)
        .post("/addUserTema",authMiddlware,TemaController.addUserTema)

        .post("/createPost",authMiddlware,PostController.createPost)



module.exports = routes;