import { h, Component } from 'preact';

import Logo from 'components/logo/picture';

import './styles.sass'


export default class SplashScreen extends Component {
  constructor() {
    super();
    this.toggleActiveClass= this.toggleActiveClass.bind(this);
    this.activeClassName = "is-active";
    this.state = {
      activeClass: ""
    }
  }

  toggleActiveClass(e) {
    const currentActiveClass = (this.state.activeClass == "") ? this.activeClassName : "";
    this.setState({ activeClass: currentActiveClass });
  }

  render(props, state) {
    const classes = "card is-vcentered has-text-centered " + this.state.activeClass;
    return <div class="splash-container">
      <div class="splash">
        <Logo circle="true" />
        <div class="loading-text">
          <span class="loading-text-words">L</span>
          <span class="loading-text-words">O</span>
          <span class="loading-text-words">A</span>
          <span class="loading-text-words">D</span>
          <span class="loading-text-words">I</span>
          <span class="loading-text-words">N</span>
          <span class="loading-text-words">G</span>
        </div>
      </div>
    </div>
  }
}
