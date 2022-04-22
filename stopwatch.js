function stopwatch() {
     var startTime = null;
     var stopTime = null;
     var running = false;
     var elapsed = 0;
     var timer = null;
     var startButton = document.getElementById("start");
     var stopButton = document.getElementById("stop");
     var resetButton = document.getElementById("reset");
     var elapsedTime = document.getElementById("elapsed");
     startButton.addEventListener("click", function() {
           if (!running) {
                startTime = new Date();
                running = true;
                timer = setInterval(function() {
                         stopTime = new Date();
                         elapsed = (stopTime.getTime() - startTime.getTime()) / 1000;
                         elapsedTime.innerHTML =`<h1>${elapsed.toFixed(2)}</h1>` 
                    }, 100);
               }
     });
     stopButton.addEventListener("click", function() {
               if (running) {
                    stopTime = new Date();
                    running = false;
                    clearInterval(timer);
               }
     });
     resetButton.addEventListener("click", function() {
               if (!running) {
                    elapsedTime.innerHTML = "<h1>0.00</h1>";
                    elapsed=0;
               }
     });
}
stopwatch();
