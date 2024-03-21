function startTimer(){
    var timeInput = document.getElementById('time').value;
    var timerDisplay = document.getElementById('timer');
    var timeLeft = timeInput
    console.log(timeInput, timeLeft)

    var countDown = setInterval (function(){
        timeLeft --;
        timerDisplay.innerHTML = 'Time Left' + timeLeft + 'seconds'
    
    if(timeLeft <= 0){
        clearInterval(countDown);
        timerDisplay.innerHTML = "Time is up!"
    } 
},1000);
}


