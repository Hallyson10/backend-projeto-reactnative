const { Router } = require('express');

const UserController = require('./src/app/Controllers/UserController');
const ProjectController = require('./src/app/Controllers/ProjectController');
const TemaController = require("./src/app/Controllers/TemaController");
const PostController = require("./src/app/Controllers/PostController");
const EnderecoController = require("./src/app/Controllers/EnderecoController");
const AutomovelController = require("./src/app/Controllers/AutomovelController");

const authMiddlware = require("./src/middleware/auth");


const routes = new Router();

routes

                .post("/registerUser", UserController.register)
                .post("/auth", UserController.autenticate)

                //.get("/",authMiddlware,ProjectController.getProjects)
                //.post("/createProject",authMiddlware,ProjectController.createProduct)
                //.put("/:productId",authMiddlware,ProjectController.updateProject)

                .post("/createTema",authMiddlware,TemaController.createTema)
                .get("/tema/:temaId",authMiddlware,TemaController.getTema)
                .get("/temas",authMiddlware,TemaController.getTemas)
                //.get("/:projectId",authMiddlware,ProjectController.getProject)

                .post("/verificaUserPertence",authMiddlware,TemaController.verifyPertence)
                .post("/addUserTema",authMiddlware,TemaController.addUserTema)

                .post("/createPost",authMiddlware,PostController.createPost)
                .post("/createEndereco",authMiddlware,EnderecoController.createEndereco)

                .post("/createAutomovel",authMiddlware,AutomovelController.createAutomovel)

                .get("/getEndereco",authMiddlware,EnderecoController.getEnderecos)
                .get("/getAutomoveis",authMiddlware,AutomovelController.getAutomoveis)



module.exports = routes;