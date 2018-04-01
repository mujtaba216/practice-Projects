var express = require('express');
var router = express.Router();
var mongoose = require('mongoose');
var Books = require('../models/book');

router.post('/newBook', function(req, res) {
	var obj = {
		title: req.body.title,
		author: req.body.author,
		category: req.body.category,
		book_code: req.body.book_code
	};
	console.log(obj);
	Books.create(obj).then(function(response) {
		res.json({
			data: response,
			status: 200
		})
	}).catch(function(err) {
		res.json({
			msg: err,
			status: 500
		})
	})
});

router.get('/getEmployee', function(req, res) {
	var age = req.query.age;
	console.log("Age", age);
	employee.find({
		age: age
	}).then(function(response) {
		res.json({
			data: response,
			status: 200
		})
	}).catch(function(err) {
		res.json({
			data: err
		})
	})
})

router.put('/updateBook', function(req, res) {
	var code = req.body.code;
	var obj = {
		category: req.body.category,
		author: req.body.author,
		title: req.body.title
	}
	Books.update({
		code: code
	},
	{
		$set: {obj}
	}).then(function(result) {
		res.json({
			data: result,
			status: 200
		})
	}).catch(function(err) {
		res.json({
			msg: err, status: 400
		})
	})
})
module.exports = router;