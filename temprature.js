function gettemprature(){
     fetch('https://api.weatherapi.com/v1/current.json?key=1f9491f5980643dbb5295812221904&q=Indore&aqi=no')
  .then(response => response.json())
  .then(data => {
     console.log(data);
     document.getElementById("temprature").innerHTML = data.current.temp_c+"&deg;C";
     setTimeout(gettemprature, 60000);
})
}
gettemprature();
