// background.js
chrome.windows.onFocusChanged.addListener(function (windowId) {
  chrome.tabs.query({ active: true, currentWindow: true }, function (tabs) {
    chrome.tabs.sendMessage(tabs[0].id, { windowId: windowId });
  });
});
