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
	loop(collection,function(element1, element2){
		results.push(callback(element1, element2))
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
var bestSentenceSplitted = bestSentence.split(" ")

var	bestSentenceToUpperCase = transform(bestSentenceSplitted,function(letter){

	return letter.toUpperCase()
})

console.log(bestSentenceToUpperCase.join(" "))//"THIS IS THE BEST SIX WEEK COURSE EVER!"

// 4. collectedContents
var person = {name: 'Jon', greatestFear: 'fearItself'};

var collectedContents = transform(person, function(value, key){
  var newArray = []
  newArray.push(key, value)
	return newArray
})


console.log(collectedContents)// [ ['name', 'Jon'], ['greatestFear', 'fear itself'] ]

// 5. multByThree

// wrap our transform in a new function
var multByThree = function(collection){

  // return the array that transform returns;
  return transform(collection,function(number){
    //console.log(number)
    return number * 3
  })
}

var numbers = [1, 2, 3, 4, 5];
var numbers2 = [2, 4, 6, 8, 10]

var multipliedByThree = multByThree(numbers)
var multipliedByThreeTwo = multByThree(numbers2)

console.log(multipliedByThree) // [3, 6, 9, 12, 15];
console.log(multipliedByThreeTwo) // [6, 12, 18, 24, 30];


// 6. upperCase
var upperCase = function(collection){

  var collectionSplitted = collection.split(" ")

  return transform(collectionSplitted, function(letter){

    return letter.toUpperCase()
  })
}

    var bestSentence = "This is the best six week course ever!";
    var bestSentenceUpperCased = upperCase(bestSentence);
    console.log(bestSentenceUpperCased.join(" ")) // "THIS IS THE BEST SIX WEEK COURSE EVER!";

    var bestSentenceTwo = "This is starting to make sense!"
    var bestSentenceTwoUpperCased = upperCase(bestSentenceTwo)
    console.log(bestSentenceTwoUpperCased.join(" "))

// 7. contentsCollection
var contentsCollection = function(collection){

  return transform(person, function(value,key){
    return value
  })
}


var person = {name: 'Jon', greatestFear: 'fearItself'};
var collectedContents = contentsCollection(person);
console.log(collectedContents); // ['name', 'Jon', 'greatestFear', 'fear itself'];



var transform = function(collection,callback){

  var results = []
  loop(collection,function(element1, element2){
    results.push(callback(element1, element2))
  })

  return results
}


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








// 8. multByWhatever

// 9. divideByWhatever

// 10. switchCase

// 11. contentsCollector

// 13. makeArray

// 14. makeRow

// 15. makeTicTacToeBoard

// 16. setXorO 
