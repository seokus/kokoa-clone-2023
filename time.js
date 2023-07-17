const now = new Date();
const hours = String(now.getHours()).padStart(2, 0);
const minutes = String(now.getMinutes()).padStart(2, 0);
const times = `${hours}:${minutes}`;

const chat_time = document.querySelector("#time");

chat_time.innerText = times;

setInterval(timeFlow, 1000);
function timeFlow() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, 0);
  const minutes = String(now.getMinutes()).padStart(2, 0);
  const times = `${hours}:${minutes}`;

  const chat_time = document.querySelector("#time");

  chat_time.innerText = times;
}
timeFlow();
