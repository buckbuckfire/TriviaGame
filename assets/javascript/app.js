var timeLeft = 30;
var elem = document.getElementById('time-left');
var timerId = setInterval(countdown, 1000);
var winCount = 0;
var lossCount = 0;


//Timer
function countdown() {
    if (timeLeft == -1) {
        clearTimeout(timerId);
        doSomething();
    } else {
        elem.innerHTML = 'Time Remaining:' + timeLeft;
        timeLeft--;
    }
}

function doSomething() {
    alert("I gave it my best shot! Signed up for a tutor!");
}



// question 1
$("#button1").click(function(){
    alert("Nope");
});

$("#button2").click(function(){
   alert("Correct")
});

$("#button3").click(function(){
    alert("Nope");
});

$("#button4").click(function(){
    alert("Nope");
});

//question 2

$("#button1_2").click(function(){
    alert("Nope");
});

$("#button2_2").click(function(){
    alert("Correct");
});

$("#button3_2").click(function(){
    alert("Nope");
});

$("#button4_2").click(function(){
    alert("Nope");
});

//question 3

$("#button1_3").click(function(){
    alert("Nope");
});

$("#button2_3").click(function(){
    alert("Nope");
});

$("#button3_3").click(function(){
    alert("Nope");
});

$("#button3_4").click(function(){
    alert("Correct");
});

