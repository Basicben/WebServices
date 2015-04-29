var http = require('http');
var util = require('util');
var events = require('events');
var md1 = require('./modules/md1.js');
util.inherits(Lebron,events.EventEmitter);


// Basketball Player Obj
function Lebron(){
	this.medals = 5;
	events.EventEmitter.call(this);
}

// Collection of functions that will be called only when needed.
Lebron.prototype.addMedals = function(){
	this.emit('medalsAdded');		// fire Emit
}

Lebron.prototype.removeMedals = function(){
	this.emit('medalsRemoved');		// fire Emit
}

Lebron.prototype.checkStatus = function(){
	this.emit('medalsStatus');		// fire Emit
}

var lebron = new Lebron();
// When emit "medalsAdded", call 2 functions from module
lebron.on("medalsAdded",function(){
	md1.addMedals(this,5);
	md1.displayMedals(this);
});
// When emit "medalsRemoved", call 2 functions from module
lebron.on("medalsRemoved",function(){
	md1.removeMedals(this,8);
	md1.displayMedals(this);
});
// When emit "medalsStatus", call checkLebron function from module
lebron.on("medalsStatus",function(){
	md1.checkLebron(this,10);
});

// lebrons prototype functions
lebron.addMedals();
lebron.removeMedals();
lebron.checkStatus();


// create connection with server.
http.createServer(function(req,res){
	res.writeHeader(200);
	res.end("Great Success!\nCollected Action String Is : \n" + md1.getDataString());
}).listen(8080);
