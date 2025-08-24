import { h, Component } from 'preact';

import './scrolling-chevrons.sass'


export default class ScrollingChevrons extends Component {
  render() {
    return <div class="scrolling-chevrons">
      <div class="chevron"></div>
      <div class="chevron"></div>
      <div class="chevron"></div>
    </div>;
  }
}
