let daysContainer = document.getElementById("days");
let hoursContainer = document.getElementById("hours");
let minutesContainer = document.getElementById("minutes");
let secondsContainer = document.getElementById("seconds");

function updateCountdown() {
  function getNextNewYear() {
    let currentYear = new Date().getFullYear();
    return new Date(currentYear + 1, 0, 1);
  }
  let newYear = getNextNewYear();
  let currentTime = new Date();
  let difference = newYear - currentTime;

  let days = Math.floor(difference / (1000 * 60 * 60 * 24));
  let hours = Math.floor((difference / (1000 * 60 * 60)) % 24);
  let minutes = Math.floor((difference / (1000 * 60)) % 60);
  let seconds = Math.floor((difference / 1000) % 60);

  daysContainer.innerHTML = days + "<span>Days</span>";
  hoursContainer.innerHTML = hours + "<span>Hours</span>";
  minutesContainer.innerHTML = minutes + "<span>Minutes</span>";
  secondsContainer.innerHTML = seconds + "<span>Seconds</span>";
}

setInterval(updateCountdown, 1000);
updateCountdown();
