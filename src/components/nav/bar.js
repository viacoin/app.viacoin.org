import preact from 'preact';
import numbro from 'numbro';

import Logo from 'components/logo/picture';

import './styles.sass'

/** @jsx preact.h */

export default class Navbar extends preact.Component {
  render(props, state) {
    const {marketcap} = props;
    console.log(marketcap)
    const priceUSD = numbro(marketcap.PRICE).format({mantissa: 2});
    return <nav class="navbar is-transparent" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="">
          <Logo circle="true" text="true" />
          <div class="tag is-large is-statistics has-text-centered">
            <div class="is-value">${priceUSD}</div>
            <div class="is-label">Current Price</div>
          </div>
        </a>
      </div>
    </nav>;
  }
}
