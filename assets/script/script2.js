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
      var event = $(this).siblings('.description').val()
      var retrievedEvent = localStorage.getItem("event")
      event.innerHTML = retrievedEvent
    }
    
    $(".saveBtn").click(function() {
      console.log("it worked");
      var event = $(this).siblings('.description').val()
      console.log(event)
      localStorage.setItem("event", event)
      
    

    });
    renderEvents()
    });