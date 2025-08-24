import { h, Component } from 'preact';

import WalletIcon from 'components/icons/menu/wallet';
import WhitepaperIcon from 'components/icons/menu/whitepaper';
import TwitterIcon from 'components/icons/social/twitter';
import RedditIcon from 'components/icons/social/reddit';
import BitcoinTalkIcon from 'components/icons/social/bitcoin-talk';
import MediumIcon from 'components/icons/social/medium';

import './styles.sass'


export default class Sidebar extends Component {
  constructor() {
    super();
    this.toggleActiveClass= this.toggleActiveClass.bind(this);
    this.state = {
      activeClass: ""
    }
  }

  toggleActiveClass(e) {
    e.preventDefault();
    const aside = document.querySelector("aside");
    const sections = document.querySelectorAll(".app section");
    let currentActiveClass = (this.state.activeClass == "") ? "is-active" : "";
    let item = e.target;

    if (e.target.parentElement.tagName == "A") {
      item = e.target.parentElement;
    }

    if (item.href) {
      currentActiveClass = "";
    }

    this.setState({ activeClass: currentActiveClass });

    if (currentActiveClass) {
      aside.classList.add('is-open');
      sections.forEach(s => s.style.transform = "translateY(18rem)")
    } else {
      aside.classList.remove('is-open');
      sections.forEach(s => s.style.transform = "translateY(0)")
    }

    if (item.href) {
      const id = item.href.substring(item.href.indexOf("#"));
      const t = document.querySelector(id);
      window.scrollTo(0, t.offsetTop);
    }
  }

  render(props, state) {
    let classes = "hamburger hamburger--spin " + state.activeClass
    return <div class="is-hidden-menu">
      <button class={ classes.trim() } type="button" onclick={ this.toggleActiveClass } style="position: fixed">
        <span class="hamburger-box">
          <span class="hamburger-inner"></span>
        </span>
      </button>
      <aside class="" role="menu" aria-label="menu">
        <div class="container">
          <div class="columns is-vcentered">
            <div class="column has-text-centered">
              <a href="https://github.com/viacoin/documents/tree/master/whitepapers" target="_blank">
                <WhitepaperIcon />
                <h3 class="subtitle is-7">Download our</h3>
                <h2 class="subtitle is-4">Whitepapers</h2>
              </a>
            </div>
            <div class="column has-text-centered">
              <a href="#wallets" onclick={this.toggleActiveClass}>
                <WalletIcon />
                <h3 class="subtitle is-7">Download a</h3>
                <h2 class="subtitle is-4">Wallet</h2>
              </a>
            </div>
            <div class="column">
              <ul>
                <li><a href="#home" onclick={this.toggleActiveClass}>Home</a></li>
                <li><a href="#features" onclick={this.toggleActiveClass}>Features</a></li>
                <li><a href="#roadmap" onclick={this.toggleActiveClass}>Roadmap</a></li>
                <li><a href="#team" onclick={this.toggleActiveClass}>Team</a></li>
                <li><a href="#resources" onclick={this.toggleActiveClass}>Resources</a></li>
                <li><a href="#vendors" onclick={this.toggleActiveClass}>Vendors</a></li>
                <li><a href="#contact" onclick={this.toggleActiveClass}>Contact</a></li>
              </ul>
            </div>
            <div class="column is-social">
              <ul>
                <li><a href="https://twitter.com/viacoin" title="Viacoin Twitter" target="_blank"><TwitterIcon /></a></li>
                <li><a href="https://medium.com/@viacoin" title="Viacoin Medium" target="_blank"><MediumIcon /></a></li>
                <li><a href="https://www.reddit.com/r/viacoin/" title="Viacoin Reddit" target="_blank"><RedditIcon /></a></li>
                <li><a href="https://bitcointalk.org/index.php?topic=699278.0" title="Viacoin Bitcoin Talk" target="_blank"><BitcoinTalkIcon /></a></li>
              </ul>
            </div>
          </div>
        </div>
      </aside>
    </div>;
  }
}
