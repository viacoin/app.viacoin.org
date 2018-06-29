import preact from 'preact';

import Logo from 'components/logo/picture';
import WindowsIcon from 'components/icons/os/windows';
import MacOsIcon from 'components/icons/os/macosx';
import AndroidIcon from 'components/icons/os/android';
import LinuxIcon from 'components/icons/os/linux';
import VialectrumIcon from 'components/icons/wallets/vialectrum';
import ViacoinPaperWalletIcon from 'components/icons/wallets/viacoin-paper-wallet';
import MobileIcon from 'components/icons/wallets/mobile';
import CoinomiIcon from 'components/icons/wallets/coinomi';
import TrezorIcon from 'components/icons/wallets/trezor';
import LedgerIcon from 'components/icons/wallets/ledger';
import CopayIcon from 'components/icons/wallets/copay';

import './bg-blue-cosmos.jpg';
import './styles.sass'

/** @jsx preact.h */

export default class LayoutTeam extends preact.Component {

  resource(obj) {
    const icons = {
      WindowsIcon,
      MacOsIcon,
      VialectrumIcon,
      ViacoinPaperWalletIcon,
      MobileIcon,
      CoinomiIcon,
      TrezorIcon,
      LedgerIcon,
      LinuxIcon,
      CopayIcon,
      AndroidIcon
    };
    const Icon = icons[obj.icon];
    return <article class={obj.classes} data-aos-speed="3" data-aos="fade-up" data-aos-easing="ease" data-aos-anchor-placement="bottom-bottom">
      <div class="box">
        { obj.version &&
          <span class="tags has-addons">
            <span class="tag is-light">{obj.version[0]}</span>
            <span class="tag">{obj.version[1]}</span>
          </span>
        }
        <h4 class="title is-6">{obj.title}</h4>
        <p class="is-icon"><Icon /></p>
        <p>
          <a class="button is-large is-link" href={obj.url} target="_blank">
            {obj.button}
          </a>
        </p>
      </div>
    </article>
  }

  wallets(obj) {
    return obj.map(p => {
      p.classes = "column"
      return this.resource(p)
    });
  }

  render(props, state) {
    const os = this.wallets(this.props.config.first[0].os);
    const apps = this.wallets(this.props.config.first[1].apps);
    const thirds = this.wallets(this.props.config.third);
    return <section class="is-wallet">
      <div class="container">
        <div class="has-text-centered" data-aos="fade-up" data-aos-easing="ease" data-aos-anchor-placement="top-center">
          <Logo />
          <h3 class="title is-1" data-aos="fade-up" data-aos-easing="ease" data-aos-anchor-placement="top-center">
            <span class="has-text-weight-light">THE</span> WALLETS
          </h3>
        </div>
        <div class="columns is-first-wallet has-text-centered" data-aos="fade-up" data-aos-easing="ease" data-aos-anchor-placement="top-center">
          <div class="column">
            <h4 class="title is-4">1<sup>st</sup> PARTY WALLET</h4>
            <div class="columns">{ os }</div>
            <div class="columns">{ apps }</div>
          </div>
        </div>
        <div class="columns is-third-wallet has-text-centered"  data-aos="fade-up" data-aos-easing="ease" data-aos-anchor-placement="top-center">
          <div class="column">
            <h4 class="title is-4">3<sup>rd</sup> PARTY WALLET</h4>
            <div class="columns">{ thirds }</div>
          </div>
        </div>
      </div>
    </section>;
  }
}
