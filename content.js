// content.js
chrome.runtime.onMessage.addListener(function (message, sender, sendResponse) {
  var popup = document.createElement("div");
  popup.style.position = "fixed";
  popup.style.top = "0";
  popup.style.left = "50%";
  popup.style.transform = "translateX(-50%)";
  popup.style.fontSize = "50px";
  popup.style.backgroundColor = "white";
  popup.style.border = "5px solid black";
  popup.style.padding = "20px";
  popup.style.zIndex = "9999"; // add this line
  popup.textContent = "Window ID: " + message.windowId;
  document.body.appendChild(popup);
  setTimeout(function () {
    document.body.removeChild(popup);
  }, 1000); // remove after 1 seconds
});
