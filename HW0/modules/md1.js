// Local Variables.
var dataString = "";
var iteration = 1;


// Add data to DataString Buffer.
var addData = function(text){
	dataString += text;
	dataString += "\n";
	iteration++;
	// Print Each Part of Inserted Data String
	console.log("--\n" + dataString + " \n--")
}

// Get DataString 
exports.getDataString = function(){
	return dataString;
}

// Display Medals, Console log the number of current medals
exports.displayMedals = function(leb){
	console.log("Display Medals\nLebron's number of medals is : " + leb.medals + "\n");
	// Write Data for response
	addData(iteration + ". Lebron's number of medals is : " + leb.medals);
}

// Display a message regarding the number of current medals
exports.checkMedals = function(){
	//if(this.medals < 0) console.log("Overdraw " + this.medals);
	if(this.medals > 0){
		console.log("Good on you! No. of medals " + this.medals + "\n");	
		// Write Data for response
		addData(iteration + ". Check Medals - Good on you! No. of medals : " + leb.medals);
	}else{
		console.log("No Good. " + this.medals + "medals\n");
		// Write Data for response
		addData(iteration + ". Check Medals - No Good! No. of medals : " + leb.medals);
	}
	
}

// Display a message regarding current medals against another number.
exports.checkLebron = function(leb,amount){
	if(leb.medals > amount){
		console.log("You overcome last year's medals!!! Good Job \n");
		// Write Data for response
		addData(iteration + ". Is " + leb.medals + " is greater than " + amount + " ? Yes, You overcome last year's medals!!! Good Job");
	}else{
		console.log("Last year you were way better\n");
		// Write Data for response
		addData(iteration + ". Is " + leb.medals + " is greater than " + amount + " ? No, Last year you were way better");
	}
	
}

// Add a certain amount of Medals to a Player
exports.addMedals = function(leb, amount){
	leb.medals += amount;
	addData(iteration + ". Add " + amount + " medal\\s");
}

// Remove a certain amount of Medals to a Player
exports.removeMedals = function(leb, amount){
	if(amount > leb.medals){
		console.log("Not possible. minimum medals can be 0");
		// Write Data for response
		addData(iteration + ". Cannot remove " + amount + " medals");
	}else{
		leb.medals -= amount;
		// Write Data for response
		addData(iteration + ". Remove " + amount + " medal\\s");
	}
}

