const express = require('express')
const graphqlHTTP = require('express-graphql')
const schema = require('./schema/schema')
const mongoose = require('mongoose')

const app = express()

mongoose.connect(
    'mongodb+srv://root:root@graphqltest-iph2s.mongodb.net/test?retryWrites=true&w=majority'
)
mongoose.connection.once('open', () => {
    console.log('connected to database')
})

app.use(
    '/graphql',
    graphqlHTTP({
        schema,
        graphiql: true,
    })
)

app.get('/', (req, res) => {
    res.send('Hello world')
})

app.listen(4000, () => {
    console.log('now listening for requests')
})
