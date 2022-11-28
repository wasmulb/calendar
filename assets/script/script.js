$(function (){
var nine = $("#hour-9")
var ten = $("#hour-10")
var eleven = $("#hour-11")
var twelve = $("#hour-12")
var thirteen = $("#hour-13")
var fourteen = $("#hour-14")
var fifteen = $("#hour-15")
var sixteen = $("#hour-16")
var seventeen = $("#hour-17")
var eighteen = $("#hour-18")
var nineteen = $("#hour-19")
var twenty = $("#hour-20")
var twentyone = $("#hour-21")
var twentytwo = $("#hour-22")

var nineEvent = $("#nine-am")


var hourArray = [nine, ten, eleven, twelve, thirteen, fourteen, fifteen, sixteen, seventeen, eighteen, nineteen, twenty, twentyone, twentytwo]

var todaysDate = dayjs().format("MMM D, YYYY")
$("#currentDay").text("Today is: " + todaysDate)
console.log(todaysDate)

var currentHour = dayjs().format("H")
console.log(currentHour)

for (i = 0; i < hourArray.length; i++){
if (currentHour == i+9){
  hourArray[i].attr("class", "row time-block present")
}
else if (currentHour > i+9){
  hourArray[i].attr("class", "row time-block past")
}
else if(currentHour < i+9){
  hourArray[i].attr("class", "row time-block future")
}
}

//all local storage logic
function renderEvents(){
  var retrievedEvent = localStorage.getItem("event9")
  nineEvent.innerHTML = retrievedEvent
}

$(".saveBtn").click(function() {
  var event9 = nineEvent.value;
  console.log("it worked");
  localStorage.setItem("event9",event9)
});
});

// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.
$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
});


//The current day header
