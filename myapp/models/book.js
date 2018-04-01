var mongoose = require('mongoose');

var BookSchema = mongoose.Schema({
	title: String,
	author: String,
	category: String,
	book_code: Number
})

var Books = mongoose.model('Books', BookSchema);

module.exports = Books;