//server.js
const express = require('express')
const bodyParser = require('body-parser')

// Routes
const postRouter = require('./src/routes/post.router')

const app = express()
const PORT = 8080

app.use(
    bodyParser.urlencoded({
        extended: true,
    })
)

app.use(bodyParser.json())

app.use('/posts', postRouter)

// Our DB Configuration
require('./src/database')

app.get('/', (req, res) => {
    res.send('Hello World')
})

app.listen(PORT, function () {
    console.log(`Server Listening on ${PORT}`)
})
