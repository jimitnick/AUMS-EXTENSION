// Communicate with content.js for theme/file actions
document.getElementById('theme-toggle').onclick = () =>
  chrome.tabs.query({active:true, currentWindow:true}, tabs =>
    chrome.scripting.executeScript({target: {tabId: tabs[0].id}, func: toggleTheme})
  );

document.getElementById('file-list').onclick = () =>
  chrome.tabs.query({active:true, currentWindow:true}, tabs =>
    chrome.scripting.executeScript({target: {tabId: tabs[0].id}, func: listFiles})
  );

// Dummy implementations for context. Actual DOM queries go in content.js
function toggleTheme() {}
function listFiles() {}
document.getElementById('theme-dark').onclick = () =>
  chrome.tabs.query({active:true, currentWindow:true}, tabs =>
    chrome.scripting.executeScript({target: {tabId: tabs[0].id}, func: () => setTheme('dark')})
  );
