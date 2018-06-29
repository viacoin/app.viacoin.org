import 'main.sass';
import preact from 'preact';
import App from 'components/app';

/** @jsx preact.h */

document.addEventListener('DOMContentLoaded', () => {
  if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('service-worker.js');
  }
  preact.render((<App />), document.body);
});
