const { Schema, model } = require('mongoose')

module.exports = model(
    'Book',
    new Schema({
        name: String,
        genre: String,
        authorId: String,
    })
)
