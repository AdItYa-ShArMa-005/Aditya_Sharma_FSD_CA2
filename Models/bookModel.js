const mongoose  = require('mongoose');

const bookSchema = new mongoose.Schema({
    title : {
        type : String,
        require : true
    },
    author : {
        type : String,
        require : true
    },
    category : {
        type : String,
        require : true
    },
    available : {
        type : Boolean,
        enum : ['true','false'],
        default : true
    }
},
{
    timestamps : true
});

const Book = new mongoose.model('Book',bookSchema);

module.exports = Book;