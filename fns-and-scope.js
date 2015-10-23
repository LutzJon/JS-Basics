//Once you complete a problem, open up Chrome and check the answer in the console.


//Create a function called isTyler that accepts name as it's only argument.
//If the argument you passed in is equal to 'Tyler', return true. If it's not, return false.
var name = 'Tyler';
  function isTyler(name) {
  	if( name === "Tyler") {
  		return true;
  	}else{
  		return false
  	}
  }


//Next problem



//Create a function called getName that uses prompt() to prompt the user for their name, then returns the name.
function getName() {
	var userName = prompt('Whats your name?') 
	return userName;
}

  //Code Here


//Next Problem



//Create a function called welcome that uses your getName function you created in the previous problem to get the users name,
//then alerts "Welcome, " plus whatever the users name is.

  function welcome() {
  	var user = getName();
alert ("welcome, " + user);

  }
//Next problem




//What is the difference between arguments and parameters?

  //Parameters appear in procedure definitions; arguments appear in procedure calls.


//Next problem



//What are all the falsy values in JavaScript and how do you check if something is falsy?
0
null 
undefined 
false 
NaN
empty strings 
  //Answer Here



//Next Problem



//Create a function called myName that returns your name

  function myName {
  	return "Jon";
  }

//Now save the function definition of myName into a new variable called newMyName

  var newMyName = myName();

//Now alert the result of invoking newMyName

alert(newMyName);

//Next problem



//Create a function called outerFn which returns an anonymous function which returns your name.

function outerFn() {
	return function(){
		return("jon")
	}
}

//Now save the result of invoking outerFn into a variable called innerFn.

var innerFn = outerFn();

//Now invoke innerFn.
innerFn();