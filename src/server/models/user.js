const mongoose = require('mongoose')

const Schema = mongoose.Schema
const userSchema = new Schema({
    email: String,
    password: String,
    weights: [{
        type: Schema.Types.ObjectId,
        ref: "WeightData"
    }]
})

module.exports = mongoose.model('user', userSchema, 'users')