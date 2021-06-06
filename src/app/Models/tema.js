const mongoose = require('../../config/connection');

const TemaScheme = mongoose.Schema(
  {
    title : { type: String, require: true },
    posts : [{ type: mongoose.Schema.Types.ObjectId, ref: "post"}],
    userContains :[{ type: mongoose.Schema.Types.ObjectId, ref: "user"}]
  },
)

module.exports = mongoose.model('tema', TemaScheme)