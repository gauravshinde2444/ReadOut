const Books = require('../models/Books');

exports.getIndex = (req, res) => {
    res.send('Book Library Home Route');
};


exports.getBooks = (req, res) => {
    Books.fetchAll((books) => {
        console.log(books);
        res.json(books);
    });
};

exports.getBook = (req, res) => {
    const bookId = req.params.bookId;

    Books.findById(bookId, (book) => {
        console.log(book);
        res.json(book);
    });
};

exports.postAddBook = (req, res) => {
    const { name, author, narrated, img, bookLength, releaseDate, language } = req.body;

    const book = new Books(null, name, author, narrated, img, bookLength, releaseDate, language);
    book.save();
    res.json({ msg: 'Book Added' });
};