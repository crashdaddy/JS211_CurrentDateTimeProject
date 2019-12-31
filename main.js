// **THIS IS INCREDIBLY IMPORTANT THAT YOU DO BOTH SECTIONS!!! You will be doing only front-end work in 421 and you need to brush up on your HTML elements**
$(function(){
$("a[data-toggle]").on("click", function(e) {
  e.preventDefault();  // prevent navigating
  var selector = $(this).data("toggle");  // get corresponding element
  $(selector).toggle("slow");
});
})
// ***************************
//          PART ONE
// ***************************
// Write a JavaScript program to display the current day and time, start with:
console.log(new Date)

const displayDate = () => {
  const currentDate = new Date()

  document.getElementById("display-element").innerHTML = currentDate;
}
 

// Write a JavaScript program to convert a number to a string.

$(function(){
  $('#numberText').on('change',function(){
    // we don't need to assign the val to 
    // three different values, but it's much cleaner
    var decString = parseInt($(this).val());
    var hexString = parseInt($(this).val());
    var binString = parseInt($(this).val());
    
        $("#stringDiv").html("Converting your number to a string:<br/> Base10: " + decString.toString(10) + 
        " <br/>Base 16 (hex): " + hexString.toString(16).toUpperCase() + " <br/>Binary: " 
        + binString.toString(2) + "<br/>");
  });
})


// Write a JavaScript program to convert a string to the number.

const stringNum = () => {
  var crazyStringNumber = "22";
  var htmlText = "I picked a number, 22, that is a string. Watch what happens if I add 22+22. <br>";
  htmlText += crazyStringNumber + " + " + crazyStringNumber + " = " + crazyStringNumber+crazyStringNumber;
  htmlText += "<br/>Crazy, right? But then if we apply a simple 'parseInt' function, they become <em>numbers</em> again!";
  htmlText += "<br/>Watch this: <br/>";
  var totalString = parseInt(crazyStringNumber) + parseInt(crazyStringNumber)
  htmlText += crazyStringNumber + " + " + crazyStringNumber + " = " + totalString;
  document.getElementById("stringNumber").innerHTML = htmlText;
}

// Write a JavaScript program that takes in different datatypes and prints out whether they are a:
  // * Boolean
  // * Null
  // * Undefined
  // * Number
  // * NaN
  // * String

  const getType = (value) => Object.prototype.toString.call(value).slice(8, -1).toLowerCase();

  var showDataType = () => {
    var showHorse = null;
    document.getElementById("dataTypeDiv").innerHTML= "true: " + typeof true + "<br>" +
    "null: " + getType(showHorse) + "<br/>" +
    "undeclared variable (doughnuts): " + typeof doughnuts + "<br>" +
    "3.14: " +typeof 3.14 + "<br>" + 
    "NaN: " + Number.NaN + "<br>" + 
    "bluebirds: " + typeof "bluebirds" + "<br>";
    
  }
  
 
  
// Write a JavaScript program that adds 2 numbers together.

$( function() {
  var handle = $( "#custom-handle" );
  $( "#slider" ).slider({
    create: function() {
      handle.text( $( this ).slider( "value" ) );
    },
    slide: function( event, ui ) {
      handle.text( ui.value );
      $("#additionTotal").html(ui.value + " + " + parseInt($("#custom-handle2").html()) + " = " + (parseInt(ui.value) + parseInt($("#custom-handle2").html())));
    }
  });
} );
$( function() {
  var handle = $( "#custom-handle2" );
  $( "#slider2" ).slider({
    create: function() {
      handle.text( $( this ).slider( "value" ) );
    },
    slide: function( event, ui ) {
      handle.text( ui.value );
      $("#additionTotal").html(parseInt($("#custom-handle").html()) + " + " + parseInt(ui.value) + " = " + (parseInt(ui.value) + parseInt($("#custom-handle").html())));
    }
  });
} );



var checkTrues = () => {
  // clear out the maidens' responses
  $("#broomhildaDiv").html("");
  $("#gretaDiv").html("");
  $("#schotziDiv").html("");

  // parse the numbers to int
  var a = parseInt($("#numberText1").val());
  var b = parseInt($("#numberText2").val());
  var c = parseInt($("#numberText3").val());

// Write a JavaScript program that runs only when 2 things are true.
  if (a+b > 100 && c < 20) {
      $("#broomhildaDiv").html("Broomhilda accepts your offer!");
      $("#broomhildaDiv").css("background-color","blue");
      $("#broomhildaDiv").css("color","yellow");
  }else {$("#broomhildaDiv").html("Broomhilda ignores you!");
  $("#broomhildaDiv").css("background-color","white");
  $("#broomhildaDiv").css("color","black");
}

  // Write a JavaScript program that runs when 1 of 2 things are true.

  if ((a+b > 100 && !(c < 20)) || (!(a+b > 100) && (c<20))) {
    $("#gretaDiv").html("Greta accepts your offer!");
    $("#gretaDiv").css("background-color","blue");
    $("#gretaDiv").css("color","yellow");
} else {$("#gretaDiv").html("Greta ignores you!");
    $("#gretaDiv").css("background-color","white");
    $("#gretaDiv").css("color","black");
}

// Write a JavaScript program that runs when both things are not true.
if (!(a+b > 100) && !(c < 20)) {
  $("#schotziDiv").html("Schotzi accepts your offer!");
  $("#schotziDiv").css("background-color","blue");
  $("#schotziDiv").css("color","yellow");
  } else {$("#schotziDiv").html("Schotzi ignores you!");
  $("#schotziDiv").css("background-color","white");
  $("#schotziDiv").css("color","black");
}

}

 

// ***************************
//         PART TWO
// ***************************

// 1. download Live-Server by Ritwick Dey, 
// 2. reload VS Code, 
// 3. click the "Go Live" button
// 4. Go local host 5500 or http://127.0.0.1:5500/index.html to see your web page
// 5. Or go use the `npm start` command and navigate to localhost:8080 (ctrl + C to close)
// 6. go to `index.html` 
// 7. create inputs, buttons and event listeners that render the code blocks you built above to the DOM.




// Additional Resources
// Video1: https://player.vimeo.com/video/377147232
// Video2: https://www.youtube.com/embed/bkvH28PXLWc
// Video3: https://www.youtube.com/embed/TrGI9Yki-24
