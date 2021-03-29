import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const appSlug = chrome.runtime.getManifest().name.replaceAll(' ', '_').toLowerCase();
const rootElementId = `__${appSlug}_root__`;

if (!document.getElementById(rootElementId)) {
  const el = document.createElement('div');
  el.setAttribute('id', rootElementId);
  document.body.append(el);
}

const root = document.getElementById(rootElementId);
ReactDOM.render(<App />, root);

console.log('[START] content initialized');
