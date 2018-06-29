import preact from 'preact';

import './scrolling-chevrons.sass'

/** @jsx preact.h */

export default class ScrollingChevrons extends preact.Component {
  render() {
    return <div class="scrolling-chevrons">
      <div class="chevron"></div>
      <div class="chevron"></div>
      <div class="chevron"></div>
    </div>;
  }
}
