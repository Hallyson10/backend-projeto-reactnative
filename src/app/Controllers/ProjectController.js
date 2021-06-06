const Project = require('../Models/project');
const Task = require("../Models/task");

module.exports = {
    async getProjects(req, res){
        try {
            const project = await Project.find().populate(["user","tasks"]);
            return res.send({ project })
        } catch (error) {
            return res.status(400).send({ error : "Ocorreu um erro ao buscar seus projetos projetos!"})
        }
    },
    async getProject(req, res){
        try {
            const project = await Project.findById(req.params.projectId).populate(["user","tasks"]);
            return res.send({ project })
        } catch (error) {
            return res.status(400).send({ error : "Ocorreu um erro ao buscar seu projeto projeto!"})
        }
    },

    async createProduct(req, res){
        try {
            const { title, description, tasks } = req.body;

            const project = await Project.create({title,description,user : req.userId});
           await Promise.all(tasks.map(async(task)=>{
                const projectTask = new Task({ ...task , project : project._id});
                await projectTask.save();
                project.tasks.push(projectTask);
            }))
            project.save();
            return res.send({ project })
        } catch (error) {
            return res.status(400).send({ error : "Ocorreu um erro ao tentar cadastrar um novo projeto!"})
        }
    },
    async updateProject(req, res){
        return res.send({ user : req.userId})
    },
}