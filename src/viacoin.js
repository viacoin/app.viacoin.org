import 'main.sass';
import { h, render } from 'preact';
import App from 'components/app';

document.addEventListener('DOMContentLoaded', () => {
  if (import.meta.env.PROD && 'serviceWorker' in navigator) {
    navigator.serviceWorker.register('/service-worker.js');
  }
  render((<App />), document.body);
});
