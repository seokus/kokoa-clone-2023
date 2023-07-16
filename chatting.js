const chatInput = document.querySelector("#chatInput");
const reply = document.querySelector(".reply");
const mainChat = document.querySelector(".main-chat");
reply.addEventListener("submit", replySubmit);

function replySubmit(event) {
  event.preventDefault();
  const newReply = chatInput.value;
  chatInput.value = null;
  paintReply(newReply);
}

function paintReply(newReply) {
  const div = document.createElement("div");
  div.classList.add("message-row", "message-row--own");
  const div_second = document.createElement("div");
  div_second.classList.add("message-row__content");
  const div_third = document.createElement("div");
  div_third.classList.add("message__info");
  const span = document.createElement("span");
  span.classList.add("message__bubble");
  const span_second = document.createElement("span");
  span_second.classList.add("message__time");

  div.appendChild(div_second);
  div_second.appendChild(div_third);
  div_third.appendChild(span);
  div_third.appendChild(span_second);
  mainChat.appendChild(div);

  const now = new Date();
  const hours = String(now.getHours()).padStart(2, 0);
  const minutes = String(now.getMinutes()).padStart(2, 0);
  const times = `${hours}:${minutes}`;

  span.innerText = newReply;
  span_second.innerText = times;
}
