const mongoose = require('mongoose')

const Schema = mongoose.Schema
const weightDataSchema = new Schema({
    weight: Number,
    bodyFat: Number,
    date: Date,
    person: {
        type: Schema.Types.ObjectId,
        ref: "user"
    }
})

// ref is name of model being refered to i.e. 'user' model
module.exports = mongoose.model('weightData', weightDataSchema, 'weightData')