var countDownDate = new Date("jun 21, 2024 17:00:00").getTime();

var x = setInterval(function () {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  document.getElementById("days").innerHTML = days + "d ";
  document.getElementById("hours").innerHTML = hours + "h ";
  document.getElementById("minutes").innerHTML = minutes + "m ";
  document.getElementById("seconds").innerHTML = seconds + "s ";
  if (distance < 0) {
    document.getElementById("days").style.display = "none";
    document.getElementById("hours").style.display = "none";
    document.getElementById("minutes").style.display = "none";
    document.getElementById("seconds").style.display = "none";
    document.getElementById("readyforit").innerHTML =
      "IT FEELS LIKE A PERFECT NIGHT";
  }
}, 1000);
