const express = require('express');
const router = express.Router();
const getBooks = require('../Controller/getBooks');
const addBooks = require('../Controller/addBooks');
const updateBooks = require('../Controller/updateBooks');

router.get('/', getBooks);
router.post('/', addBooks);
router.patch('/:id', updateBooks);

module.exports = router;