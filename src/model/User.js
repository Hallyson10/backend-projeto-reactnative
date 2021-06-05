const mongoose = require("../config/connection");

const UserShema = new mongoose.Schema({
    name : {
        type : String,
        required : false
    },
    email : {
        type : String,
        required : false,
        lowercase : true
    },
    password : {
        type : String,
        required : false,
        select : true
    },
    createdAt : {
        type : Date,
        default : Date.now
    }
})

const User = mongoose.model("User",UserShema);

module.exports = User;