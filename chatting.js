const chatInput = document.querySelector("#chatInput");
const reply = document.querySelector(".reply");
const mainChat = document.querySelector(".main-chat");
reply.addEventListener("submit", replySubmit);
const REPLY__KEY = "replys";
const messageEvent = document.querySelector(".message-row--own");

let newReplys = [];

function replySubmit(event) {
  event.preventDefault();
  const newReply = chatInput.value;
  chatInput.value = null;
  const replyObj = {
    Text: newReply,
    id: Date.now(),
  };
  paintReply(replyObj);
  newReplys.push(replyObj);
  saveReply();
}

function saveReply() {
  localStorage.setItem(REPLY__KEY, JSON.stringify(newReplys));
}

function paintReply(newReply) {
  const div = document.createElement("div");
  div.classList.add("message-row", "message-row--own");
  div.id = newReply.id;
  const div_second = document.createElement("div");
  div_second.classList.add("message-row__content");
  const div_third = document.createElement("div");
  div_third.classList.add("message__info");
  const span = document.createElement("span");
  span.classList.add("message__bubble");
  const span_second = document.createElement("span");
  span_second.classList.add("message__time");
  const button = document.createElement("button");
  button.addEventListener("click", deleteReply);
  button.classList.add("button__hide");
  button.innerText = "Delete\nMessage";

  div.appendChild(div_second);
  div_second.appendChild(div_third);
  div_third.appendChild(span);
  div_third.appendChild(span_second);
  mainChat.appendChild(div);
  div.appendChild(button);

  const now = new Date();
  const hours = String(now.getHours()).padStart(2, 0);
  const minutes = String(now.getMinutes()).padStart(2, 0);
  const times = `${hours}:${minutes}`;

  span.innerText = newReply.Text;
  span_second.innerText = times;

  messageEvent.addEventListener("click", appearDelete);
  function appearDelete() {
    button.style.display = "block";
  }
}

function deleteReply(event) {
  const li = event.target.parentElement;
  li.remove();
  console.dir(li);
  newReplys = newReplys.filter((newReplys) => newReplys.id !== parseInt(li.id));
  saveReply();
}

const getReply = localStorage.getItem(REPLY__KEY);

if (getReply) {
  const parseReply = JSON.parse(getReply);
  newReplys = parseReply;
  parseReply.forEach(paintReply);
}
