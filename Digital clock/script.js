const timeDiv = document.querySelector('#time');
const dateDiv = document.querySelector('.date');
const button = document.querySelector('#switch');
let is24hours = false;

function updateTime() {
  if (is24hours) {
    timeDiv.innerText = new Date().toLocaleTimeString('en-GB', { hour12: false });
  } else {
    timeDiv.innerText = new Date().toLocaleTimeString();
  }
}

function updateDate() {
  dateDiv.innerText = new Date().toLocaleDateString('en-IN');
}

button.addEventListener("click", () => {
  console.log("hello");
  is24hours = !is24hours;
  is24hours ? button.innerText = "Switch to 12-hours format" : button.innerText = "Switch to 24-hours format";
  updateTime();
});

setInterval(updateTime, 1000);
updateTime(); 
updateDate();