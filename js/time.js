const WEEK = [
  "星期日",
  "星期一",
  "星期二",
  "星期三",
  "星期四",
  "星期五",
  "星期六",
];

function update() {
  var now = new Date();

  document.querySelector("#time").innerText =
    zero(now.getHours(), 2) +
    ":" +
    zero(now.getMinutes(), 2) +
    ":" +
    zero(now.getSeconds(), 2);

  document.querySelector("#date").innerText =
    now.getFullYear() +
    "-" +
    zero(now.getMonth() + 1, 2) +
    "-" +
    zero(now.getDate(), 2) +
    " " +
    WEEK[now.getDay()];
}

update();
setInterval(update, 100);

function zero(num, digit) {
  return String(num).padStart(digit, "0");
}
