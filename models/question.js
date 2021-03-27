var mongoose = require('mongoose')
var questionSchema = mongoose.Schema({
    quizid: {
        type: String,
        required: true
    },
    questionId: {
        type: String,
        required: true
    },
    questionText:{
        type: String, 
        required: true
    },
    answer: {
        type: String,
        required: true
    },
    options:{
        type  :Array,
        default:[]
    }
})
module.exports = mongoose.model('question',questionSchema)

