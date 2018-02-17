





var usernuber =26
var counter=0
var maxtry=9 

// create an array  
var letters =['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't','u', 'v', 'w', 'x','y', 'z'];


//generate a random number between 0 and 25
var random =Math.floor(Math.random()*26);
console.log(random);
counter  +=1;
 //prompt user and ask them to guess a letter between a and z
  var r = prompt("guess what letter I'm thinking of" + 26);
  console.log(r);
var answer=2;
for(var i=0; i < letters.length; i++) {
  	console.log(letters[i]);
  }
for(var i=0; i <26; i++){

	 r= prompt("what is your guess");
 if (r ==2){
 	alert("you guessed right");
 	console.log("----------");}

 	else{
 guess= prompt("please try again");}
 console.log(r);
}





 
 



 
  
   
  


//check to see if number is corrrect


//if number is wrong promt the user again and ask them to try to guess again. Repeat until user gets the number correct or have used up all of their attempt.


// if user guessed the correct number, tell them wht the nuber is, and how many attempt it took them to get the right number, then thank them for playing.*/