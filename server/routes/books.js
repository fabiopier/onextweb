const express = require('express');
const router = express.Router();
const booksController = require( '../controllers/booksController');

// call get
router.post('/getAll',booksController.getPost);

//search controller
router.post('/searchbooks',booksController.searchBooks);

//insert controller
router.post('/insertbooks',booksController.insertBook);
 
module.exports = router;