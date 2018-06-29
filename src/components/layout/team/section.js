import preact from 'preact';

import Logo from 'components/logo/picture';

import Card from 'components/team/card';

import './bg-blue-moon.jpg';
import './styles.sass'

/** @jsx preact.h */

export default class LayoutTeam extends preact.Component {

  cards(config) {
    const x = 3; // chunks size
    return config.map((f, idx) => {
      return <div class="column is-one-third">
        <Card name={f.name} job={f.job} picto={f.picture} icons={f.icons} url={f.url} index={idx}/>
      </div>
    }).reduce((ar, it, i) => {
      const ix = Math.floor(i/x);
      if(!ar[ix]) {
        ar[ix] = [];
      }
      ar[ix].push(it);
      return ar;
    }, []).map(g => {
      return <div class="columns is-centered">{g}</div>
    })
  }

  render(props, state) {
    const {config} = props;
    const cards = this.cards(config);
    return <section class="is-team">
      <div class="container">
        <div class="has-text-centered" data-aos="fade-up" data-aos-easing="ease" data-aos-anchor-placement="top-center">
          <Logo />
          <h3 class="title is-1" data-aos="fade-up" data-aos-easing="ease" data-aos-anchor-placement="top-center">
            <span class="has-text-weight-light">THE</span> TEAM
          </h3>
        </div>
        {cards}
      </div>
    </section>;
  }
}
