const mongoose = require('mongoose')

// type and the required are the most basic parts when you setup a schema.
const authorsSchema = new mongoose.Schema({
    name : {
        type : String,
        required: true
    },

    age : {
        type: String,
        required: true
    }
})

// Author is the name of the table inside of our database 
module.exports = mongoose.model('Author', authorsSchema)