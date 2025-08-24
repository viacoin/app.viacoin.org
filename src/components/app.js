import { h, Component } from 'preact';
import AOS from 'aos/dist/aos';
import analytics from 'universal-ga';
import numbro from 'numbro';

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

  async config() {
    let host = '//' + window.location.hostname + '/' + window.location.pathname + '/';
    if(import.meta.env.DEV) host = '';
    
    try {
      // Load config.json
      const configResponse = await fetch(host + 'config.json');
      if (!configResponse.ok) {
        throw new Error(`Config fetch failed: ${configResponse.status}`);
      }
      const data = await configResponse.json();
      
      // Fetch market data from CryptoCompare API
      try {
        const marketResponse = await fetch('https://min-api.cryptocompare.com/data/pricemultifull?fsyms=VIA&tsyms=USD');
        if (marketResponse.ok) {
          const marketData = await marketResponse.json();
          const viaData = marketData.RAW?.VIA?.USD;
          
          if (viaData) {
            // Format market data using numbro
            const price = '$' + numbro(viaData.PRICE).format({
              average: true,
              mantissa: 2
            });
            
            const marketCap = '$' + numbro(viaData.MKTCAP).format({
              average: true,
              mantissa: 2
            });
            
            const volume24h = '$' + numbro(viaData.VOLUMEDAY).format({
              average: true,
              mantissa: 2
            });
            
            // Replace placeholders in slider slides
            if (data.slider && data.slider.slides) {
              data.slider.slides = data.slider.slides.map(slide => {
                return slide
                  .replace(/\$\{price\}/g, price)
                  .replace(/\$\{market_cap_usd\}/g, `$${marketCap}`)
                  .replace(/\$\{24h_volume_usd\}/g, `$${volume24h}`);
              });
            }
          }
        }
      } catch (marketError) {
        console.warn('Market data fetch failed, using placeholders:', marketError);
        // Replace placeholders with fallback values
        if (data.slider && data.slider.slides) {
          data.slider.slides = data.slider.slides.map(slide => {
            return slide
              .replace(/\$\{price\}/g, '$0.00')
              .replace(/\$\{market_cap_usd\}/g, '$0.00')
              .replace(/\$\{24h_volume_usd\}/g, '$0.00');
          });
        }
      }
      
      this.state.config = data;
      this.setState({config: this.state.config, loading: false});
      
    } catch (error) {
      // handle config loading error
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
    }
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
