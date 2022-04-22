var backgroundarray=["1.svg","2.svg",'3.svg','4.svg','5.svg','7.svg','8.svg','9.svg','10.svg']
function changeBackground(backgroundarray, currentbackground) {
     var newbackground = backgroundarray[Math.floor(Math.random() * backgroundarray.length)];
     if (newbackground == currentbackground) {
          changeBackground(backgroundarray, currentbackground);
     } else {
          document.body.style.backgroundImage = "url(" + newbackground + ")";
     }
     setTimeout(function() {
          changeBackground(backgroundarray, newbackground);
     }, 20000);
}
changeBackground(backgroundarray, backgroundarray[0]);

