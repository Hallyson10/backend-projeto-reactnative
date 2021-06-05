const mongoose = require('../../config/connection');
const bcrypt = require('bcryptjs');

const UserSchema = mongoose.Schema(
  {
    name : { type: String, required: true },
    email : { type: String, required: true },
    password : { type: String, required: true},
    createdAt : { type : Date, default : Date.now }
  },
  { 
    timestamps: true,
  }
)
UserSchema.pre("save",async function(next) {
      const hash = await bcrypt.hash(this.password, 8);
      this.password = hash;

      next();
})

module.exports = mongoose.model('user', UserSchema)