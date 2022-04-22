function clock12(){
     var d = new Date();
     var h = d.getHours();
     var m = d.getMinutes();
     var s = d.getSeconds();
     var hh = h;
     var mm = m;
     var ss = s;
     if(h<10) hh = "0"+h;
     if(h>12) hh = h-12;
     if(h>12) ampm = "pm";
     else ampm = "am";
     if(m<10) mm = "0"+m;
     if(s<10) ss = "0"+s;
     document.getElementById("clock").innerHTML = hh+":"+mm+":"+ss+" "+ampm;
     setTimeout("clock12()",1000);
}
clock12();