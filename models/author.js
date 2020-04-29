const { Schema, model } = require('mongoose')

module.exports = model(
    'Author',
    new Schema({
        name: String,
        age: Number,
    })
)
