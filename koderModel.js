const mongoose = require('mongoose')

const koderSchema = new mongoose.Schema({
    name : {
        type : String,
        minLength : 2,
        maxLenght : 100,
        required : true
     },
     lastName : {
        type : String,
        minLength : 2,
        maxLenght : 100,
        required : true
     },
     age : {
         type : Number,
         min : 0,
         max : 150,
         required: true,
     },
     gender : {
        type : String,
        emun : ['m','f'],
        required : true
     }
})

const model = mongoose.model('koders', koderSchema)




module.exports = model