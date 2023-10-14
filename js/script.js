function run() {
  document.querySelector(".talkdiv p").textContent = "我是施心棠 不要懷疑!!";
  setTimeout(() => {
    document.querySelector(".main div").style = "height:100%;width:5px;";
  }, 500);
  setTimeout(() => {
    document.querySelector(".main p").style = "left: 0px;";
  }, 1000);
  setTimeout(() => {
    document.querySelector(".mainp").style = "left: 0px;";
  }, 1500);
}
