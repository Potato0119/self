function isMobileDevice() {
  let mobileDevices = [
    "Android",
    "webOS",
    "iPhone",
    "iPad",
    "iPod",
    "BlackBerry",
    "Windows Phone",
  ];
  for (var i = 0; i < mobileDevices.length; i++) {
    if (navigator.userAgent.match(mobileDevices[i])) {
      return true;
    }
  }
  return false;
}
setTimeout(() => {
  if (isMobileDevice()) {
    document.querySelector("header img").style =
      "position: absolute;transform: translate(-50%, 0);top: 0;left: 50%;width: 237.3px;height: 40px;";
    document.querySelector(".mobile-nav").style = "visibility: visible;";
    document.querySelector(".headera").style = "visibility: hidden;";
  } else {
    document.querySelector("header img").style =
      "position: absolute;transform: translate(-50%, 0);top: 0;left: 50%;width: 237.3px;height: 40px;";
    document.querySelector(".mobile-nav").style = "visibility: visible;";
    document.querySelector("#nav").style = "visibility: visible;";
    document.querySelector(".headera1").style = "visibility: hidden;";
    document.querySelector(".headera2").style = "visibility: hidden;";
    document.querySelector(".headera3").style = "visibility: hidden;";
    document.querySelector(".headera4").style = "visibility: hidden;";
  }
}, 1000);
