var randomWord=''
var emptyArray = [];
var lettersGuessed=[]
var wins = 0;
var losses = 0;
var guesses = 10;
var myBeach= ["OCEAN","SPEEDO","TOWEL","BOARDWALK","RESORT","POOL","SANDCASTLE","SEASHELL","SUNSHINE","WAVES"]
var myImage= ["assets/images/beach.png","assets/images/beach1.png","assets/images/beach2.png","assets/images/beach3.png","assets/images/beach4.png","assets/images/beach5.png","assets/images/beach6.png","assets/images/beach7.png","assets/images/beach8.png","assets/images/beach9.png"]

function createWord(){
	
var randomIndex= Math.floor(Math.random()*myBeach.length);
randomWord = myBeach[randomIndex]

}

function createImage(){

var randomIndex= Math.floor(Math.random()*myImage.length);
randomImage = myImage[randomIndex]

}

function emptyString() {
for (var i = 0; i < randomWord.length; i++) {
	emptyArray.push("___ ");
}
}
createWord();
emptyString();

//It would be better if I defined randomIndex before createImage and createWord so it would not choose a different index for each.
//Ideally, myBeach and myImage would be set up as an object, but I couldn't figure out how to pull the property and values.:(
// var myBeaches= {
// 	ocean: {item: "ocean", image: "beach1.png"},
// 	speedo: {item: "speedo", image: "beach2.png"},
// 	beach: {item: "beach", image: "beach3.png"},
// 	oasis: {item: "oasis", image: "beach4.png"},
// 	towel: {item: "towel", image: "beach5.png"},
// 	jellyfish: {item: "jellyfish", image: "beach6.png"},
// 	resort: {item: "resort", image: "beach7.png"},
// 	boardwalk: {item: "boardwalk", image: "beach8.png"},
// 	sailboat: {item: "sailboat", image: "beach9.png"},
// 	waves: {item: "waves", image: "beach.png"},
// 	};	


document.onkeypress= function (){
	var userGuess=String.fromCharCode(event.keyCode).toUpperCase();
		for (var i = 0; i < randomWord.length; i++) {

 		if (userGuess===randomWord[i]) {
 			emptyArray[i]=randomWord[i];
 		}
 	}

		if((randomWord.indexOf(userGuess) === -1)&&(lettersGuessed.indexOf(userGuess) ===-1)){
			guesses--;
			lettersGuessed.push(userGuess);


		}else if ((randomWord.indexOf(userGuess) !== -1)&&(lettersGuessed.indexOf(userGuess) ===-1)){
 			lettersGuessed.push(userGuess);
 		}
 



 	function winner(chara){
	 return chara!=="___ ";

 // }
}
 	if (emptyArray.every(winner)) {
		wins++;
		document.getElementById('previousWord').innerHTML=randomWord;
		guesses=10;
		emptyArray = [];
		lettersGuessed=[]
		createWord();
		emptyString()
		document.getElementById('randomWord').innerHTML=emptyArray.join('');
		createImage();
		document.getElementById('thinkSunny').innerHTML='<img src="'+randomImage+'">';
		
	}
	if (guesses<1){
		losses++;
		document.getElementById('previousWord').innerHTML=randomWord;
		createImage();
		document.getElementById('thinkSunny').innerHTML='<img src="'+randomImage+'">';
		guesses=10;
		emptyArray = [];
		lettersGuessed=[]
		createWord();
		emptyString()
		document.getElementById('randomWord').innerHTML=emptyArray.join('');
	}

console.log(randomWord)


document.getElementById('randomWord').innerHTML=emptyArray.join('');
document.getElementById('lettersGuessed').innerHTML=lettersGuessed;
document.getElementById('wins').innerHTML=wins;
document.getElementById('counter').innerHTML=guesses;
document.getElementById('losses').innerHTML=losses;
};







// var myZoo= ["bear","elephant","giraffe","hippopotamus","rhinocaraus"]
// var randomIndex= Math.floor(Math.random()*myZoo.length);
// var randomWord = myZoo[randomIndex]
// function newRandomWord()  {
// 	myZoo[randomIndex]}

// console.log(randomWord)


// var emptyArray = [];
// for (var i = 0; i < randomWord.length; i++) {
// 	emptyArray.push("___ ");
// // document.getElementById('randomWord').innerHTML= emptyArray;
// };

// var lettersGuessedArray=[]
// console.log(emptyArray)
// // document.getElementById('randomWord').innerHTML= emptyArray;

// document.onkeypress= function (){
// 	var userGuess=String.fromCharCode(event.keyCode).toLowerCase();


// 	document.getElementById('lettersGuessed').innerHTML+=userGuess + ", ";

	
// 	if(randomWord.indexOf(userGuess) === -1){
// 		{guesses--};
// 	}
// 	if(guesses<0)
// 		{losses++;
// 		guesses=10;
// 		newRandomWord()};


// 	for (var i = 0; i < randomWord.length; i++) {

// 	if (userGuess===randomWord[i]) {
		
// 		emptyArray[i]=randomWord[i]
// 	};

	
// //checks whether all characters are letters
	// function winner(chara){
	//  return chara!=="___ ";

// 	}
	// if (emptyArray.every(winner)) {
	// 	wins++;
	// 	newRandomWord();
// 	};





// };
// };







