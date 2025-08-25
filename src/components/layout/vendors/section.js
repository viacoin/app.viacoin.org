import { h, Component } from 'preact';

import Logo from 'components/logo/picture';

import "./styles.sass";


export default class LayoutVendors extends Component {

  vendors(config) {
    return config.map(v => {
      return <div class="column is-half" data-aos-speed="3" data-aos="fade-up" data-aos-easing="ease" data-aos-anchor-placement="top-center">
        <a href={v.url} alt={v.name} title={v.title} target="_blank">
          <img class="" src={v.picture} style={v.styles} />
          <h5 class="title is-5 has-text-weight-bold">{v.name}</h5>
          <h6 class="subtitle is-6 is-italic has-text-weight-bold">&laquo; {v.title} &raquo;</h6>
        </a>
      </div>
    })
  }

  render(props, state) {
    const {config} = props;
    const vendors = this.vendors(config);
    return <section class="is-vendors">
      <div class="container">
        <div class="has-text-centered" data-aos="fade-up" data-aos-easing="ease" data-aos-anchor-placement="top-center">
          <Logo />
          <h3 class="title is-1" data-aos="fade-up" data-aos-easing="ease" data-aos-anchor-placement="top-center">
            VENDORS
          </h3>
        </div>
        <div class="columns is-multiline has-text-centered is-vcentered">
          {vendors}
        </div>
      </div>
    </section>;
  }
}
