module.exports = {
    getProject(req,res){
        return res.send({message : "ok",userId : req.userId})
    }
}