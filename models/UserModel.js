const {Schema, model} = require('mongoose');

const UserModel = new Schema({
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    links: [{
        type: Schema.Types.ObjectId,
        ref: "Link"
    }]
})

module.exports = model("User", UserModel);