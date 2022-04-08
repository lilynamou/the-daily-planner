//Shows weekday today and today's Date
var currentDate = moment().format('dddd, MMMM Do YYYY'),
$("#currentDay").html(currentDate);

$(document).ready(function () {
//CLick listnr save bttn:
$(document).ready(function() {

$(".saveBtn").on("click", function () {

var text = $(this).siblings(".description").val();
var time = $(this).parent().attr("id");

localStorage.setItem(time, text);
})


function hourTracker() {
//Current # of Hours
var currentHour = moment().hour(); 
//
    $(".time-block").each(function() {
var blockHour = parseInt($(this).attr("id").split('hour')[1]);
console.log( blockHour, currentHour);
})
};


//Retrieve local storage data
$("#hour9 .description").val(localStorage.getItem("hour9"));
$("#hour10 .description").val(localStorage.getItem("hour10"));
$("#hour11 .description").val(localStorage.getItem("hour11"));
$("#hour12 .description").val(localStorage.getItem("hour12"));
$("#hour13 .description").val(localStorage.getItem("hour13"));
$("#hour14 .description").val(localStorage.getItem("hour14"));
$("#hour15 .description").val(localStorage.getItem("hour15"));
$("#hour16 .description").val(localStorage.getItem("hour16"));
$("#hour17 .description").val(localStorage.getItem("hour17"));

//checking if moved past time
if (blockHour < currentHour) {
    $(this).addClass("past");
    else if (blockHour === currentHour) {
    $(this).removeClass("past");
    $(this).addClass("future");
    } else {
    $(this).removeClass("past");
    $(this).removeClass("present");
    $(this).addClass("future");
}
});
}
hourUpdater();