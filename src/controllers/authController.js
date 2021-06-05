const express = require("express");
const User = require("../model/User");
const router = express.Router();

router.post("/register",async (req,res)=>{
    console.log(req.body)
    try {
        const user = await User.create(req.body);
        return res.status(200).send({
            message : "Usuário cadastrado com sucesso!",
            data : user
        })
    } catch (error) {
        return res.status(400).send({ error : error.response})       
    }
})

module.exports = app => app.use("/auth",router);