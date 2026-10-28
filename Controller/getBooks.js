const Book = require('../Models/bookModel');

const getBooks = async(req,res) => {
    const {page,limit} = req.body;

    page = parseInt(page,10)||1;
    limit = parseInt(limit,10)||10;

    const santPage = (page < 1) ? 1 : page;
    const santLimit = (limit < 1) ? 10 : limit;

    try{
        const {books,totalBooks} = await Promise.all([Book.find().skip((santPage-1)*santLimit).limit(santLimit), Book.countDocuments()]);

        if(books.length === 0)
            return res.status(404).json('No books to show');

        const totalPages = Math.ceil(totalBooks/santLimit);
        
        return res.status(200).json({
            success : true,
            books : books,
            metadata : {
                totalPages : totalPages,
                totalBooks : totalBooks,
                currenPage : santPage,
                hasNext : (santPage === totalPages) ? false : true,
                hasPrev : (santPage === 1) ? false : true
            }
        });
    }
    catch(err)
    {
        return res.status(500).json('Unable to process request');
    }

};

module.exports = getBooks;