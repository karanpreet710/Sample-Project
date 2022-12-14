const express = require('express')
// const models = require('./db/models')
// const db = models.db

const { db } = require('./db/models')
const { usersRoute }  = require('./routes/users')
const { postsRoute }  = require('./routes/posts')

const app = express()
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/users',usersRoute)
app.use('/api/posts',postsRoute)
app.use('/',express.static(__dirname + '/public'))

db.sync()
    .then(() => {
    app.listen(8383, () => {
        console.log("Server running on http://localhost:8383")
    })
    }).catch((err) => {
        console.log(new Error("Could not start database"))
        console.log(err)
    })