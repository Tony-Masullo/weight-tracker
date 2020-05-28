const mongoose = require('mongoose')

const Schema = mongoose.Schema
const weightDataSchema = new Schema({
    weight: Number,
    bodyFat: Number,
    date: Date,
    person: {
        type: Schema.Types.ObjectId,
        ref: "User"
    }
})

module.exports = mongoose.model('weight-data', weightDataSchema, 'weight-data')