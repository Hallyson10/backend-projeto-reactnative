const mongoose = require('../../config/connection');
const bcrypt = require('bcryptjs');

const TaskScheme = mongoose.Schema(
  {
    title : { type: String, require: true },
    project : { type: mongoose.Schema.Types.ObjectId, ref : "project", require : true},
    assignedTo : {type : mongoose.Schema.Types.ObjectId, ref : "user", require : true},//a task está atribuída a esse usuário
    createdAt : { type : Date, default : Date.now }
  },
)

module.exports = mongoose.model('task', TaskScheme)