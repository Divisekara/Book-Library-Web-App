const express = require('express')
const router = express.Router()
const Author = require('../models/author')

//all authors route
router.get('/', (req, res) => {
    res.render('authors/index')
})

//new Author route
router.get('/new', (req, res) =>{
    res.render('authors/new', {simple: new Author() })
})

router.post('/', (req, res) => {
    res.send(req.body.name)
})

module.exports = router