require('dotenv/config')
const express = require('express')
const mongoose = require('mongoose')

const app = express()
app.use(express.json())
const routes = require('./routes')

mongoose.connect(process.env.DATABASE_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})


app.use(routes)

const port = process.env.PORT || 3333
app.listen(port, ()=> console.log('Server listening of port 3333'))