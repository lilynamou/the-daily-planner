//Shows weekday today and today's Date
var currentDay = moment().format('dddd, MMMM Do YYYY'));
$("#currentDay").html(currentDate);

$(document).ready(function () {
    //CLick listnr save bttn:
    $(document).ready(function() {

    $(".saveBtn").on("click", function () {

    var text = $(this).siblings(".description").val();
    var time = $(this).parent().attr("id");
})


function timeTracker() {
//Current # of Hours
    var currentHour = moment().hour(); 
//
    $(".time-block").each(function() {
        var blockHour = parseInt($(this).attr("id").split('hour')[1]);
    })

};
//checking if passed time
if (blockHour < currentHour) {
    timeContainer.addClass("past");
    timeContainer.removeClass("future");
    timeContainer.removeClass("present");
}
else if (blockHour === currentHour) {
    timeContainer.addClass("present");
}
else {
    timeContainer.addClass("future");
}
})
}

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
