import messageListener from "./src/listener/httpRequestListener";

const appSlug = chrome.runtime.getManifest().name.replaceAll(' ', '_').toLowerCase();

/* eslint-disable */
chrome.runtime.onConnect.addListener((port) => {
  const extension_name = `__${appSlug}__`;
  console.assert(port.name == extension_name)
  chrome.runtime.onMessageExternal.addListener((request, sender, sendResponse) => {
    messageListener(request, sender, sendResponse, port);
  });
});
/* eslint-enable */

console.log('[START] - background initialized');
