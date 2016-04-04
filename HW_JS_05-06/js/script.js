
var start = document.querySelector(".start");
var stop = document.querySelector(".stop");
var pause = document.querySelector(".pause");
var time = document.querySelector(".time");

var counter = 0;
var date = new Date(0);
var intervalID;

time.innerHTML = timeString();
pause.setAttribute("type", "hidden");

start.addEventListener("click",startTimer);
stop.addEventListener("click",stopTimer);
pause.addEventListener("click",pauseTimer);

function startTimer()
{
  intervalID = setInterval(count, 11);
  start.setAttribute("type", "hidden");
  pause.setAttribute("type", "button");
}

function pauseTimer(){
  clearInterval(intervalID);
  start.setAttribute("type", "button");
  pause.setAttribute("type", "hidden");
  start.setAttribute("value","Продолжить");
}

function stopTimer(){
  start.setAttribute("type", "button");
  pause.setAttribute("type", "hidden");
  start.setAttribute("value","Старт");
  clearInterval(intervalID);
  counter = 0;
  date = new Date(counter);
  time.innerHTML = timeString();
}

function count()
{
  counter+= 11;
  date=new Date(counter);
  time.innerHTML = timeString();
}

function timeString() {
  var milliseconds = date.getMilliseconds();
  var seconds = date.getSeconds();
  var minutes = date.getMinutes();
  var hours = date.getHours()-2;

  hours = (hours < 10) ? "0" + hours : hours;
  minutes = (minutes < 10) ? "0" + minutes : minutes;
  seconds = (seconds < 10) ? "0" + seconds : seconds;
  milliseconds = (milliseconds < 100) ? (milliseconds < 10) ? "00" + milliseconds : "0"+milliseconds: milliseconds;

  return hours + ":" + minutes + ":" + seconds + "." + milliseconds;
}
