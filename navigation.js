function showstopwatchfromhome() {
     var stopwatch = document.getElementById('stopwatch');
     var content= document.getElementById('content');
          stopwatch.style.visibility = 'visible';
          content.style.visibility = 'hidden';
     console.log("clicked");
}
document.getElementById("stopwatchlinkfromhome").addEventListener("click", showstopwatchfromhome);
function showhomefromstopwatch() {
     var stopwatch = document.getElementById('stopwatch');
     var content= document.getElementById('content');
          stopwatch.style.visibility = 'hidden';
          content.style.visibility = 'visible';
          
     console.log("clicked");
}
document.getElementById("homelinkfromstopwatch").addEventListener("click", showhomefromstopwatch);
function showcalculatorfromhome(){
     var calculator = document.getElementById('calculator');
     var content= document.getElementById('content');
          calculator.style.visibility = 'visible';
          content.style.visibility = 'hidden';
     console.log("clicked");
}
document.getElementById("calculatorlinkfromhome").addEventListener("click", showcalculatorfromhome);
function showhomefromcalculator(){
     var calculator = document.getElementById('calculator');
     var content= document.getElementById('content');
          calculator.style.visibility = 'hidden';
          content.style.visibility = 'visible';
     console.log("clicked");
}
document.getElementById("homelinkfromcalculator").addEventListener("click", showhomefromcalculator);
function showcalculatorfromstopwatch(){
     var calculator = document.getElementById('calculator');
     var stopwatch= document.getElementById('stopwatch');
          calculator.style.visibility = 'visible';
          stopwatch.style.visibility = 'hidden';
     console.log("clicked");
}
document.getElementById("calculatorlinkfromstopwatch").addEventListener("click", showcalculatorfromstopwatch);
function showstopwatchfromcalculator(){
     var calculator = document.getElementById('calculator');
     var stopwatch= document.getElementById('stopwatch');
          calculator.style.visibility = 'hidden';
          stopwatch.style.visibility = 'visible';
     console.log("clicked");
}
document.getElementById("stopwatchlinkfromcalculator").addEventListener("click", showstopwatchfromcalculator);