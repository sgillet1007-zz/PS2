
// 1. ***********************************************
// var firstReverse = function(string){
// 	// make an array of each character within string
// 	var inputArray =[];
// 	for (i=0;i<string.length;i++){
// 		inputArray.push(string[i]);
// 	}
// 	// create empty output array of length of input array
// 	var outputArray =[];
	
// 	for (i=inputArray.length;i>-1;i--){
// 		outputArray.push(inputArray[i]);
// 	}
// 	var reverseString = outputArray.join('')
// 	console.log(reverseString);
// 	return reverseString;
// }

// firstReverse('true');

// 2. *************************************************
 
// var switchCase = function(letter){
//  	if (letter === letter.toUpperCase()){
//  		var charSwitched = letter.toLowerCase();
//  	}
//  	else if (letter === letter.toLowerCase()){
//  		charSwitched = letter.toUpperCase();
//  	}
//  	return charSwitched;
//  }

//  var swapCase = function(string){
//  	var inputArray =[];
//  	for (i=0;i<string.length;i++){
//  		inputArray.push(string[i]);
//  	}
//  	var outputArray = inputArray.map(switchCase);
//  	console.log(outputArray);
//  	return outputArray;
//  }

//  swapCase('UPPERlower');

// 3. ************************************************

var testString1 = 'Mississippi'
var testString2 = 'Today, is the greatest day ever!'

var stringToArray = function(string){
	var wordArray = function(array){
		var result = array.split(' ');
		return result;
	}
	var wordSplit = function(wordArray){
		var outputArray =[];
		for (i=0;i<wordArray.length;i++){
			outputArray.push(wordArray[i].split(''));	
		}
		return outputArray;
	}
	return wordSplit(wordArray(string));
}
// ******^^FUNCTION FOR CREATING LETTER(ARRAY) OF WORDS(ARRAY)^^*************

var letterCount = function(letterArray){
	var counts = {};
	// for loop for counting number of times each letter occcurs...puts this into object counts
	// loops through each array element
	for (i=0;i<letterArray.length;i++){
		// loops through each letter of each outer array
		for (j=0;j<letterArray[i].length;i++){
			var letter = letterArray[i];
			counts[letter] = counts[letter] ? counts[letter]+1 : 1;
		}
	}
	return counts;
}

console.log(letterCount(stringToArray(testString2)));




