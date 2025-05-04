let mainTabId = null;

chrome.tabs.onUpdated.addListener((tabId, changeInfo, tab) => {
  if (tab.url && tab.url.includes("https://fms.think7.in/Login.aspx")) {
    if (mainTabId === null) {
      mainTabId = tabId;
    } else if (tabId !== mainTabId) {
      chrome.tabs.remove(tabId);
    }
  }
});

chrome.tabs.onRemoved.addListener((tabId) => {
  if (tabId === mainTabId) {
    mainTabId = null;
  }
});

