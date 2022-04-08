//Today's time and Date
var currentDate = moment().format('MMMM Do YYY, h:mm:ss a');

var DayOfWeek = moment().format('dddd');
console.log();

//Adding Save Btn
$("button").click(function() {
    $('p').html()
});


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
