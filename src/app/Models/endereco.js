const mongoose = require('../../config/connection');

const EnderecoScheme = mongoose.Schema(
  {
    user : {type:mongoose.Schema.Types.ObjectId, ref : "user"},
    rua : { type: String, require: true },
    bairro : { type: String, require:true},
    createdAt : { type : Date, default : Date.now }
  },
)

module.exports = mongoose.model('endereco', EnderecoScheme)