function list() {
  //選單 主部分(圖標)
  document.querySelector("#nav").style = "visibility: hidden;";
  document.querySelector("#error").style = "visibility: visible;";

  //選單 選單部分(li)
  setTimeout(() => {
    document.querySelector(".li1").style = "visibility: visible;opacity: 1;";
  }, 200);
  setTimeout(() => {
    document.querySelector(".li2").style = "visibility: visible;opacity: 1;";
  }, 400);
  setTimeout(() => {
    document.querySelector(".li3").style = "visibility: visible;opacity: 1;";
  }, 600);
  setTimeout(() => {
    document.querySelector(".li4").style = "visibility: visible;opacity: 1;";
  }, 800);
}
function back() {
  //選單 主部分(圖標)
  document.querySelector("#nav").style = "visibility: visible;";
  document.querySelector("#error").style = "visibility: hidden;";

  //選單 選單部分(li)
  document.querySelector(".li1").style = "opacity: 0;";
  document.querySelector(".li2").style = "opacity: 0;";
  document.querySelector(".li3").style = "opacity: 0;";
  document.querySelector(".li4").style = "opacity: 0;";
  setTimeout(() => {
    document.querySelector(".li1").style = "opacity: 0;";
    document.querySelector(".li2").style = "opacity: 0;";
    document.querySelector(".li3").style = "opacity: 0;";
    document.querySelector(".li4").style = "opacity: 0;";
    document.querySelector(".li1").style = "visibility: hidden;";
    document.querySelector(".li2").style = "visibility: hidden;";
    document.querySelector(".li3").style = "visibility: hidden;";
    document.querySelector(".li4").style = "visibility: hidden;";
  }, 1000);
}
