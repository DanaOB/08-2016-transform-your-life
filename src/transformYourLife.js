var loop = function(collection, callback){

  if (Array.isArray(collection)){
    for (var i = 0; i < collection.length; i++){
      callback(collection[i], i);
    }
  } else if (typeof collection === 'object'){
    for (var key in collection){
      callback(collection[key], key);
    }
  }
};


// 1. Build transform.
var transform = function(collection,callback){
	var results = []
	loop(collection,function(element){
		results.push(callback(element))
	})
	return results
}

// 2. allNumbersMultipliedByThree
var numbers = [1, 2, 3, 4, 5];

var allNumbersMultipliedByThree = transform(numbers,function(number){
	return number * 3
})
console.log(allNumbersMultipliedByThree)//[3,6,9,12,15]
// 3. bestSentenceToUpperCase
var bestSentence = "This is the best six week course ever!";

var	bestSentenceToUpperCase = transform(bestSentence,function(letter){
	console.log("this is" + bestSentence)
	return letter.toUpperCase()
})

console.log(bestSentenceToUpperCase) //"THIS IS THE BEST SIX WEEK COURSE EVER!"

// 4. collectedContents
var person = {name: 'Jon', greatestFear: 'fearItself'};

var collectedContents = transform(person, function(value,key){
	return value
})

console.log(collectedContents)

// 5. multByThree

// 6. upperCase

// 7. contentsCollection

// 8. multByWhatever

// 9. divideByWhatever

// 10. switchCase

// 11. contentsCollector

// 13. makeArray

// 14. makeRow

// 15. makeTicTacToeBoard

// 16. setXorO 
