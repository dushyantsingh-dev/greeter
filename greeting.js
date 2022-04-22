//make a function to greet you based on the time of day
function greet() {
  var time = new Date().getHours();
  var greeting;
  if (time < 12) {
    greeting = 'Good Morning!';
  } else if (time >= 12 && time < 17) {
    greeting = 'Good Afternoon!';
  } else {
    greeting = 'Good Evening!';
  }
  document.getElementById('greeting').innerHTML = greeting;
}
greet();