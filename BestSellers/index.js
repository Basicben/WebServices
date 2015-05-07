var express = require('express');
var url = require('url');
var bookSeller = require('./node_modules/bookseller.js');
var app = express();

app.get('/bestsellers',function(req,res){
	// Get All Books from JSON	
	res.json(bookSeller.getAllBooks());
});

app.get('/getbook',function(req,res){
	// Get book details by ID using Query strings
	var urlPart = url.parse(req.url,true);
	var query = urlPart.query;
	// validate query string.
	if(query.bookId != null && query.bookId > 0) {
		// get specific book object
		var bookObj = bookSeller.getBookById(query.bookId);
		// if bookObj is null or empty print so. if not print json
		bookObj == null ? res.send("No Such ID Exists") : res.json(bookObj);
	}
	
});

app.param('month',function(req,res,next,value){
	// print month param.
	console.log("Month: " + value);
	next();
});

app.get('/getbookbymonth/:month',function(req,res){		// getbookbymonth/222 for example
	// Get all books by month
	// Print param (:month)
	console.log(req.params);
	// Get Array of books in a specific month
	var objArray = bookSeller.getBooksByMonth(req.params.month);
	// if array is empty or null print so. if not, print json.
	objArray == null || objArray.length <= 0 ? res.send("No Books This Month") : res.json(objArray);
});



app.listen(8080);
console.log("Listening to 8080");