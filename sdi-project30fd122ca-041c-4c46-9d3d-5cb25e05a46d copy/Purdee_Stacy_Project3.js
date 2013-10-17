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
var pagesRead = 9;

console.log("My name is " + myName + " and it is " + doChores+" that I have " + myChores + " chores to do before lunch.");

console.log("My chores are " + myChoresAre + " .");

//JSON Data
var json = {
    "book" : "Beginning JavaScript",
    "level" : "Beginner",
    "platform" : "Ebook"
   
    };

console.log("I need to study from " + json.book + " this week for homework.");
console.log("It is a " + json.level + " textbook to help you learn the fundamentals.");
console.log("It is easy too read on all my devices as it is an " + json.platform + " that I got at IT library online.");

//Method Procedure

var hoursForHomework = function (freeHours) {

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

//Number Function

var pagesToRead = function(pages){
    
    while (pages < 0) {
    console.log(pages + " pages left to read.");
    var pagesRead = pagesToRead + 9;
    }
return pagesRead;
}




console.log( "I have read " + pagesToRead(0) + " pages of my textbook- Beginning JavaScript so far.")


//String Function

var homeworkToFinish = function(project3, video){
    var myProject3 = (" is a very long assignment ");
    var myVideo = (" will not take long to make.");
    return project3 + myProject3 +  "but " + video + myVideo;
};

var homework = homeworkToFinish("SDI Wk 3 Assignment", "the SDI Reflection Video");
console.log(homework);
console.log("I will do my Project first than I will make my video.");



//Array Method 

var timeStudied = {
   "JavaScript": 180,
   "Objects": 120,
   "Methods": 90,
   "studyTime": function(){
    var totalStudyTime = this.JavaScript + this.Objects + this.Methods;
    var totalToHours = totalStudyTime / 60;
    return totalToHours;
   }
 
   
}

console.log("I have studied Javascript "+ timeStudied.JavaScript + " minutes.");
console.log("I have studied Objects "+ timeStudied.Objects + " minutes.");
console.log("I have studied Methods "+ timeStudied.Methods + " minutes.");
console.log("I think I need to study more JavaScript");
console.log("I have now studied for " + timeStudied.studyTime() + " hours.")




//Finished




















