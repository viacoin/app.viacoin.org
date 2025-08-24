import { h, Component } from 'preact';

import Logo from 'components/logo/picture';

import "./styles.sass";


export default class LayoutResources extends Component {

  resource(obj) {
    return <div>
      <div class={obj.classes + " is-hidden-mobile"} data-aos-speed="3" data-aos="fade-up" data-aos-easing="ease" data-aos-delay={obj.delay} data-aos-anchor-placement="top-center">
        <a href={obj.url} target="_blank"><img src={obj.picture} alt={obj.title} title={obj.title} style={obj.styles} /></a>
      </div>
      <div class={obj.classes + " is-hidden-desktop"} data-aos-speed="3" data-aos="fade-up" data-aos-easing="ease" data-aos-anchor-placement="bottom-bottom">
        <a href={obj.url} target="_blank"><img src={obj.picture} alt={obj.title} title={obj.title} style={obj.styles} /></a>
      </div>
    </div>
  }

  resources(config) {
    return {
      pools: config.pools.map(p => {
        p.classes = "is-pools grayscale"
        return this.resource(p)
      }),
      exchanges: config.exchanges.map(p => {
        p.classes = "is-exchanges grayscale"
        return this.resource(p)
      }),
      services: config.services.map(p => {
        p.classes = "is-services grayscale"
        return this.resource(p)
      }),
    }
  }

  render(props, state) {
    const {config} = props;
    const resources = this.resources(config);
    return <section class="is-resources">
      <div class="container">
        <div class="has-text-centered" data-aos="fade-up" data-aos-easing="ease" data-aos-anchor-placement="top-center">
          <Logo />
          <h3 class="title is-1" data-aos="fade-up" data-aos-easing="ease" data-aos-anchor-placement="top-center">
            RESOURCES
          </h3>
        </div>
        <div class="columns has-text-centered">
          <div class="column is-one-third">
            <h4 class="title is-4" data-aos="fade-up" data-aos-easing="ease" data-aos-anchor-placement="bottom-bottom">POOLS</h4>
            {resources.pools}
          </div>
          <div class="column is-one-third">
            <h4 class="title is-4" data-aos="fade-up" data-aos-easing="ease" data-aos-anchor-placement="bottom-bottom">EXCHANGES</h4>
            {resources.exchanges}
          </div>
          <div class="column is-one-third">
            <h4 class="title is-4" data-aos="fade-up" data-aos-easing="ease" data-aos-anchor-placement="bottom-bottom">SERVICES</h4>
            {resources.services}
          </div>
        </div>
      </div>
    </section>;
  }
}
