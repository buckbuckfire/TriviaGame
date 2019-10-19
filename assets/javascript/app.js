var timeLeft = 30;
var elem = document.getElementById('time-left');
var timerId = setInterval(countdown, 1000);
var winCount = 0;
var lossCount = 0;

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
    alert("Hi");
}


// question 1
$("#button1").click(function(){
    alert("test");
});

$("#button2").click(function(){
    alert("test");
});

$("#button3").click(function(){
    alert("test");
});

$("#button4").click(function(){
    alert("test");
});

//question 2

$("#button1_2").click(function(){
    alert("test");
});

$("#button2_2").click(function(){
    alert("test");
});

$("#button3_2").click(function(){
    alert("test");
});

$("#button4_2").click(function(){
    alert("test");
});

//question 3

$("#button1_3").click(function(){
    alert("test");
});

$("#button2_3").click(function(){
    alert("test");
});

$("#button3_3").click(function(){
    alert("test");
});

$("#button3_4").click(function(){
    alert("test");
});

