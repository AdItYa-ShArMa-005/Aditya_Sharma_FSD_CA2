const Book = require('../Models/bookModel');

const addBooks = async(req,res) => {
    const {author,title,category} = req.body;

    if(!author || !title || !category)
        return res.status(401).json({message : 'Enter valid entries'});

    try{
        const existingBook = await Book.findOne({author : author, title : title, category : category});
        if(existingBook)
            return res.status(400).json({messgae : 'Books already exist'});

        const newBook = {author : author, title : title, category : category};
        const addBook = await Book.create(newBook);
        return res.status(201).json({messgae : 'Book added successfully'});
    }
    catch(err)
    {
        return res.status(500).json({message : 'Unable to process request'});
    }
};

module.exports = addBooks;