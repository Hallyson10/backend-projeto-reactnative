const mongoose = require('../../config/connection');
const bcrypt = require('bcryptjs');

const PostScheme = mongoose.Schema(
  {
    user : {type : mongoose.Schema.Types.ObjectId, ref : "user", require : true},//pega o object id de uma referencia, no caso model de user
    temaId : { type: mongoose.Schema.Types.ObjectId,ref : "tema", require: true },
    description : { type: String, required: true },
    title : { type : String, require: true },
    createdAt : { type : Date, default : Date.now }
  },
)

module.exports = mongoose.model('post', PostScheme)