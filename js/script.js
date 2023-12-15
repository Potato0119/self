// 入場動畫
function run() {
  document.querySelector(".talkdiv p").textContent = "我是施心棠";
  setTimeout(() => {
    document.querySelector(".main div").style = "height:100%;width:5px;";
  }, 500);
  setTimeout(() => {
    document.querySelector(".main p").style = "left: 0px;";
  }, 1000);
  setTimeout(() => {
    document.querySelector(".mainp").style = "left: 0px;";
  }, 1500);
  setTimeout(() => {
    document.querySelector(".gotopro").style = "transform: scale(1.5);";
  }, 2000);
  setTimeout(() => {
    document.querySelector(".gotopro").style = "transform: scale(1);";
  }, 2300);
}

// 手機選單開關
const checkbox = document.getElementById("check");
checkbox.addEventListener("change", function () {
  if (this.checked) {
    document.querySelector(".nav-ul-mobile").style.display = "block";
  } else {
    document.querySelector(".nav-ul-mobile").style.display = "none";
  }
});
function closenav() {
  checkbox.checked = false;
  document.querySelector(".nav-ul-mobile").style.display = "none";
}
