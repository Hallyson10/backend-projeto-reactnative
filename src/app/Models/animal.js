const mongoose = require('../../config/connection');

const AnimalScheme = mongoose.Schema(
  {
    user : {type:mongoose.Schema.Types.ObjectId, ref : "user"},
    marca : { type : String, require : true},
    modelo : { type: String, require: true },
    cor : { type: String, require:true},
    placa : { type: String, require:true},
    cidade : { type : String, require:true},
    ano : { type: String, require: true },
    createdAt : { type : Date, default : Date.now }
  },
)

module.exports = mongoose.model('animal', AnimalScheme)