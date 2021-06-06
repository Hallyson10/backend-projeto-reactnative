const mongoose = require('../../config/connection');
const bcrypt = require('bcryptjs');

const ProjectScheme = mongoose.Schema(
  {
    user : {type : mongoose.Schema.Types.ObjectId, ref : "user", required : true},//pega o object id de uma referencia, no caso model de user
    title : { type: String, required: true },
    description : { type: String, required: true },
    tasks : [{ type: mongoose.Schema.Types.ObjectId, ref: "task"}],
    assunto : { type : String, require : true },
    createdAt : { type : Date, default : Date.now }
  },
)

module.exports = mongoose.model('project', ProjectScheme)