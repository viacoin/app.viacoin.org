import preact from 'preact';
import AOS from 'aos/dist/aos';
import numbro from 'numbro';
import analytics from 'universal-ga';
import request from 'superagent';

import SplashScreen from 'components/splash/screen';
import Particles from 'components/particles/background';
import Intro from 'components/layout/intro/section';
import Features from 'components/layout/features/section';
import Roadmap from 'components/layout/roadmap/section';
import Wallet from 'components/layout/wallet/section';
import Team from 'components/layout/team/section';
import Resources from 'components/layout/resources/section';
import Vendors from 'components/layout/vendors/section';
import Footer from 'components/layout/footer/section';
import Sidebar from 'components/nav/side';

import './app.sass'
import './bg-blue-space.jpg'

/** @jsx preact.h */

export default class App extends preact.Component {
  constructor() {
    super();
    this.state = {
      config: {},
      loading: true
    }
  }

  config() {
    let host = '//' + window.location.hostname + '/' + window.location.pathname + '/';
    if(process.env.NODE_ENV == 'development') host = '';
    request.get(host + '/config.json')
    .then(res => {
      const data = res.body;
      request.get('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=VIA&tsyms=USD')
      .then(res => {
        const market = res.body["RAW"]["VIA"]["USD"]
        //console.log(market)
        data.slider.slides = data.slider.slides.map(s => {
          return s.replace(
            "{price}",
            numbro(market.PRICE).format({
              average: false,
              mantissa: 2,
            })
          )
          .replace(
            "{market_cap_usd}",
            numbro(market.MKTCAP).format({
              average: true,
              mantissa: 2
            })
          )
          .replace(
            "{24h_volume_usd}",
            numbro(market.VOLUMEDAY).format({
              average: true,
              mantissa: 2
            })
          )
        })
        this.state.config = data;
        this.state.config.coinmarketcap = market;
        this.setState({config: this.state.config, loading: false});
      })
      .catch(function (error) {
        // handle error
        console.log(error);
      })
    })
    
  }

  componentDidMount() {
    this.config();
    AOS.init();
    if(process.env.NODE_ENV != 'development') {
      analytics.initialize('UA-119053871-1');
      analytics.pageview('/');
    }
  }

  render(props, state) {
    if (state.loading) return <SplashScreen />;
    return <section class="app">
      <Particles />
      <Sidebar />
      <a id="home"></a>
      <Intro config={state.config} />
      <a id="features"></a>
      <Features config={state.config.features} />
      <a id="roadmap"></a>
      <Roadmap config={state.config.roadmap} />
      <a id="wallets"></a>
      <Wallet config={state.config.wallets} />
      <a id="team"></a>
      <Team config={state.config.team} />
      <a id="resources"></a>
      <Resources config={state.config.resources} />
      <a id="vendors"></a>
      <Vendors config={state.config.vendors} />
      <a id="contact"></a>
      <Footer config={state.config.donate} />
    </section>;
  }
}

/*
import Ribbon from 'components/ribbon/ribbon';
<Ribbon classes="top-right sticky shadow">
<a href="https://github.com/viacoin/documents/tree/master/whitepapers" target="_blank">WhitePaper</a>
</Ribbon>
*/
//
