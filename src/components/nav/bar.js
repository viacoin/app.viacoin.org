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
      <div class="navbar-menu">
        <div class="navbar-end">
          <a class="navbar-item" href="#features">Features</a>
          <a class="navbar-item" href="#roadmap">Roadmap</a>
          <a class="navbar-item" href="#wallets">Wallets</a>
          <a class="navbar-item" href="#resources">Resources</a>
          <a class="navbar-item" href="#vendors">Vendors</a>
          <a class="navbar-item" href="#footer">Contact</a>
        </div>
      </div>
    </nav>;
  }
}
