const User = require('../Models/User');
const bcrypt = require('bcryptjs');
const yup = require('yup');
const jwt = require("jsonwebtoken");
const authConfig = require("../../config/auth");

module.exports = {
   
  async autenticate(req, res){
    const { email, password } = req.body;
    const user = await User.findOne({ email }).select('+password');
    if(!user){
      return res.status(400).send({ error : "usuário inexistente!"})
    }
    if(!await bcrypt.compare(password, user.password)){
      return res.status(400).send({ error : "senha incorreta!"})
    }
    user.password = undefined;
    const token = jwt.sign({id:user.id},authConfig.secret,{
      expiresIn : 86400 //1 dia em segundos
    })
    res.send({ 
      user,
      token : token
     });
  },

async register(req, res) {
  try {
  let schema = yup.object().shape({
    name: yup.string().required(),
    email: yup.string().email().required(),
    password: yup.string().required()
  });

  if(!(await schema.isValid(req.body))){
    return res.status(400).json({
      error: true,
      message: "Dados inválidos"
    })
  } 
  let userExist = await User.findOne({ email: req.body.email });
  if(userExist) {
    return res.status(400).json({
      error: true,
      message: "Este usuário já existe!"
    })
  }
  const { name, email , password } = req.body;
  const data = { name, email, password };

  const user = await User.create(data);
  const token = jwt.sign({id:user.id},authConfig.secret,{
    expiresIn : 86400 //1 dia em segundos
  })
  if(user){
    user.password = undefined;
    return res.status(200).send({ user,token })
  }
  } catch (error) {
    return res.status(400).send({
      error : true,
      message : "Registration failed",
      error : error
    })
  }
  }

}