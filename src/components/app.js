import { h, Component } from 'preact';
import AOS from 'aos/dist/aos';
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

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      config: {},
      loading: true
    }
  }

  config() {
    let host = '//' + window.location.hostname + '/' + window.location.pathname + '/';
    if(import.meta.env.DEV) host = '';
    request.get(host + '/config.json')
    .then(res => {
      const data = res.body;
      this.state.config = data;
      this.setState({config: this.state.config, loading: false});
    })
    .catch(function (error) {
      // handle error
      console.log('Config loading failed, using fallback config:', error);
      
      // Provide fallback config structure when loading fails
      const fallbackConfig = {
        slider: {
          slides: [
            "Viacoin - Fast, secure digital currency",
            "Lightning Network enabled for instant transactions"
          ]
        },
        features: [],
        roadmap: [],
        wallets: [],
        team: [],
        resources: [],
        vendors: [],
        donate: {}
      };
      
      this.state.config = fallbackConfig;
      this.setState({config: this.state.config, loading: false});
    }.bind(this))
  }

  componentDidMount() {
    this.config();
    AOS.init();
    if(import.meta.env.PROD) {
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
