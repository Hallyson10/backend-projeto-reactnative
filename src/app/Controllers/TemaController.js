const Post = require('../Models/post');
const Tema = require("../Models/tema");

module.exports = {
    async getTema(req, res){
        try {
            const tema = await Tema.findById(req.params.temaId).populate("posts")
            const post = await Promise.all(tema.posts.map(async(post)=>{
                const item = await Post.findById(post._id).populate("user");
                return item;
            }))
            return res.status(200).send({ tema,post });
        } catch (error) {
            return res.status(400).send({ message : error });
        }
    },
    async getTemas(req, res){
        try {
            const temas = await Tema.find().populate("posts")
            return res.status(200).send({ temas });
        } catch (error) {
            console.log(error)
            return res.status(400).send({ message : error });
        }
    },
    async createTema(req, res){
        try {
            const { title } = req.body;
            const tema = await Tema.create({ title });
            return res.status(200).send({ tema });
        } catch (error) {
            return res.status(400).send({ message : error });
        }
    },
    async verifyPertence(req,res){
        try {
            const { temaId } = req.body;
            const tema = await Tema.findById({_id:temaId});
            if(tema.userContains.indexOf(req.userId)> -1 ){
               return res.status(200).send({ status : "usuário pertence ao grupo!" });
            }else{
                return res.status(400).send({ status : "usuário não pertence ao grupo!" });
            }
           
        } catch (error) {
            return res.status(400).send({ message : error });
        }
    },
    async addUserTema(req,res){
        try {
            const { temaId } = req.body;
            const tema = await Tema.findById({_id:temaId}).populate("userContains")
            tema.userContains[tema.userContains.findIndex(el => el.id === req.userId)] = req.userId;
            tema.save();
            return res.status(200).send({ tema})
        } catch (error) {
            return res.status(400).send({ message : error });
        }
    }
}