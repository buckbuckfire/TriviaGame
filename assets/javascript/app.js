var timeLeft = 30;
var elem = document.getElementById('time-left');
var timerId = setInterval(countdown, 1000);

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

