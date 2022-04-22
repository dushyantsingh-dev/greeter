const input = document.getElementById("name");
var name=input.value;
function setname(name) {
     this.name = name;
     document.getElementById("greeting").innerHTML='hello! <input value="'+name+'"class="set" id="name"> <button id="setname">change</button>';
}

document.getElementById('setname').addEventListener("click", setname(name));
