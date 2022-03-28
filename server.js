if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config()
}

const express = require('express')
const app = express()

const expressLayouts = require('express-ejs-layouts')

const indexRouter = require('./routes/index')
const homeRouter =  require('./routes/home')
const authorRouter = require('./routes/authors')

app.set('view engine', 'ejs')
// __dirname denote the absolute path to the folder.
// here we set the path to the views folder
app.set('views', __dirname + '/views')

// console.log(__dirname, '/views') // you can see anything using this 

app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use(express.static('public'))

const mongoose = require('mongoose')
mongoose.connect(process.env.DATABASE_URL, { useNewUrlParser: true })
const db = mongoose.connection
db.on('error', error => console.error(error))
db.once('open', () => console.log('Connected to Mongoose'))

app.use('/', indexRouter)
app.use('/', homeRouter)
app.use('/authors', authorRouter)

app.listen(process.env.PORT || 8080)

