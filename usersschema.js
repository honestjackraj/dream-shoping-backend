const mongoose = require("mongoose")


const Users = mongoose.Schema({
    firstname: { type: String, required: true },
    lastname: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
})


// module.exports = mongoose.model("register", user);



const User=mongoose.model('register',Users);
module.exports = {User}