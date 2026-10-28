const Book = require('../Models/bookModel');
const mongoose = require('mongoose');

const updateBooks = async(req,res) => {
    const id = req.params.id;
    const status = req.body.status;
    if(!id)
        return res.status(401).json('Enter ID');

    if(!status)
        return res.status(401).json('Enter Status');

    try{
        const existingBook = await Book.findById(id);
        if(!existingBook)
            return res.status(404).json('No book with this ID exists');

        existingBook.available = status;
        existingBook.save();
        return res.status(200).json('Updation Successful');
    }
    catch(err)
    {
        return res.status(500).json('Unable to process request');
    }
};
module.exports = updateBooks;