const mongoose = require('../../config/connection');
const bcrypt = require('bcryptjs');

const UserSchema = mongoose.Schema(
  {
    name : { type: String, require: true },
    email : { type: String, require: true },
    password : { type: String, require: true,select : false},
    createdAt : { type : Date, default : Date.now }
  }
)
UserSchema.pre("save",async function(next) {
      const hash = await bcrypt.hash(this.password, 8);
      this.password = hash;

      next();
})

module.exports = mongoose.model('user', UserSchema)