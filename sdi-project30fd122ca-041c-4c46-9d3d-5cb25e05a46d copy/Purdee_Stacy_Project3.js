//alert("JavaScript works!");


/*
Stacy Purdee
October 17th, 2013
Project 3
1310
Story with a flowchart and JSON Data 
*/

var myName      = "Stacy";
var myChores    = 3;
var myChoresAre = ["wash dishes", "vacuum", " and dust"];
var myFavBooks  = [" Beginning JavaScript ", " JavaScript for Absolute Beginners ", " and Step-by-Step JavaScript "];
var minsPerBook = [45, 20, 30];
var doChores    = true;

console.log("My name is " + myName + " and it is " + doChores+" that I have " + myChores + " chores to do before lunch.");

console.log("My chores are " + myChoresAre + " .");

//JSON Data
var iRead = {
    "myBooks": {
        "book1":{ 
            "name": "Beginning JavaScript",
            "version": "Electronic"
        },
        "book2":{
            "name": "Javascript for Absolute Beginners",
            "version": "Hardback" 
        },
        "book3": {
            "name": "Step by Step JavScript",
            "version": "Electronic"
        }
        
        }
   
    };
