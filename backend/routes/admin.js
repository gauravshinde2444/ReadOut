const express = require('express');
const router = express.Router();
const adminController = require('../controllers/admin');

router.get('/', adminController.getIndex);

router.get('/books', adminController.getBooks);

router.get('/books/:bookId', adminController.getBook);

router.post('/add-book', adminController.postAddBook);

module.exports = router;