import { h, Component } from 'preact';

import Logo from 'components/logo/picture';

import './styles.sass'


export default class Navbar extends Component {
  render(props, state) {
    return <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="">
          <Logo circle="true" text="true" />
        </a>
      </div>
    </nav>;
  }
}
