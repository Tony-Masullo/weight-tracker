const mongoose = require('mongoose')

const Schema = mongoose.Schema
const userSchema = new Schema({
    email: String,
    password: String,
    weights: [{
        type: Schema.Types.ObjectId,
        ref: "weightData"
    }]
})

// ref is name of model being refered to i.e. 'weight-data' model
module.exports = mongoose.model('user', userSchema, 'users')