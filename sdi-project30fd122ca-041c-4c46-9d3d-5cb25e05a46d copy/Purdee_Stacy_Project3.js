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

//Method Procedure

var hoursForHomework = function(freeHours){

if (freeHours > 1) {
        console.log("I have " + freeHours + " hours of homework to do before I can do my chores or cook lunch.");
    
} else {
        console.log("I don't have time to do homework before lunch");
    }

};

hoursForHomework(2);

//Boolean Function

console.log("Before I do my homework I will lay out something to cook for lunch");


var todaysLunch = function(Hamburgers, Fries, SweetTea){
    
if (Hamburgers + Fries + SweetTea > 0) {
    var cook = true;
    return cook;
    
} else {
    var orderChineseTakeout = false;
    return orderChineseTakeout;
    }
};

var iWillCook = todaysLunch(3,1,1);
console.log("It is " + iWillCook + " that I will cook hamburgers, french fries and sweet tea for lunch.");

//Number Function With Accessor

var pagesToRead = {
    reading : function(pages){
    while (pages < 0) {
    console.log(pages + " pages left to read.");
    var pages = pages + 9;
    }
return pages;
    }
};

var pagesRead = pagesToRead(22);

console.log( "I have read " + pagesRead.reading(0) + " pages of my textbook- Beginning JavaScript so far.")
;

//String Function

var homeworkToFinish = function(project2, video){
    var myProject2 = ("It is a very long assignment.");
    var myVideo = ("It will not take long to make a new video.");
    return project2 + myProject2 +  "but " + video + myVideo;
};

var homework = homeworkToFinish(" SDI Wk 2 Assignment", "SDI Reflection Video");
console.log(homework);
console.log("I will do my Project first than I will make my video.");






















