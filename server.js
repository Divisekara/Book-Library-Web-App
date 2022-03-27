const express = require('express')
const app = express()

const expressLayouts = require('express-ejs-layouts')

app.set('view engine', 'ejs')
// __dirname denote the absolute path to the folder.
app.set('views', __dirname, '/views')

// console.log(__dirname, '/views') // you can see anything using this 

app.set('layout', 'layouts/layout')
app.use(expressLayouts)
app.use('/', indexRouter)

app.listen(prcoess.env.PORT || 3000)




