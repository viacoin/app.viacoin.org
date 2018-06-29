import preact from 'preact';

import Logo from 'components/logo/picture';

import Card from 'components/feature/card';

import FastAndSecureIcon from 'components/icons/features/fast-and-secure';
import DigitIcon from 'components/icons/features/digit';
import AtomicSwapIcon from 'components/icons/features/atomic-swap';
import ScalableIcon from 'components/icons/features/scalable';
import LightningNetworkIcon from 'components/icons/features/lightning-network';

import "./styles.sass"

/** @jsx preact.h */

export default class LayoutFeatures extends preact.Component {

  cards(config) {
    const icons = {
      FastAndSecureIcon,
      DigitIcon,
      AtomicSwapIcon,
      ScalableIcon,
      LightningNetworkIcon
    }
    return config.map(f => {
      const Icon = icons[f.icon];
      return <div class="column" data-aos="fade-up" data-aos-easing="ease">
        <Card title={f.title} text={f.text}><Icon /></Card>
      </div>
    })
  }

  render(props, state) {
    const {config} = props;
    const cards = this.cards(config);
    return <section class="container is-features" data-aos="fade-up" data-aos-easing="ease" data-aos-anchor-placement="top-center">
      <div class="has-text-centered">
        <Logo text="true" />
        <h3 class="title is-1 has-text-weight-light">
          4 YEARS OF EXPERIENCE <strong>FEATURES FOR THE FUTURE</strong>
        </h3>
      </div>
      <div class="columns">
        {cards}
      </div>
    </section>;
  }
}
