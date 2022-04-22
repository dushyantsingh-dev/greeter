// make a function which shows the date
function date(){
     var d= new Date();
     var day= d.getDay();
     var month= d.getMonth();
     var year= d.getFullYear();
     var date= d.getDate();
     var day_name= ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
     var month_name= ["January","February","March","April","May","June","July","August","September","October","November","December"];
     document.getElementById("date").innerHTML = day_name[day]+", "+month_name[month]+" "+date+" "+year;
     // console.log(document.getElementById("date"));
}
date();