const Tema = require("../Models/tema");
const Post = require("../Models/post");

module.exports = {
    async getPost(req, res){
        try {
            const post = await Post.findById(req.params.postId).populate("posts").populate("user")
            return res.status(200).send({ post });
        } catch (error) {
            return res.status(400).send({ message : error });
        }
    },
    async createPost(req, res){
        try {
            const { temaId,title,description } = req.body;
            const getTema = await Tema.findById(temaId).populate("posts")
            const postTask = new Post({ title,description,temaId : getTema._id, user : req.userId});
            await postTask.save();
            getTema.posts.push(postTask);
            getTema.save();
            return res.status(200).send({ getTema });
        } catch (error) {
            return res.status(400).send({ message : "error" });
        }
    },
}