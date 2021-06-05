require('dotenv/config');
const mongoose = require('mongoose');

mongoose.connect(process.env.MONGO_DB,{ useNewUrlParser: true,useUnifiedTopology: true, auth:{
  user : "joao",
  password : "ha123456"
} })
mongoose.Promise = global.Promise;

module.exports = mongoose;