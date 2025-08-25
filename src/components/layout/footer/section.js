import { h, Component } from 'preact';

import Donate from 'components/donate/modal';
import Logo from 'components/logo/picture';
import GithubIcon from 'components/icons/social/github';
import TwitterIcon from 'components/icons/social/twitter';
import RedditIcon from 'components/icons/social/reddit';
import DiscordIcon from 'components/icons/social/discord';
import BitcoinTalkIcon from 'components/icons/social/bitcoin-talk';
import MediumIcon from 'components/icons/social/medium';
import TelegramIcon from 'components/icons/social/telegram';

import "./styles.sass";

import './bg-footer.jpg'


export default class LayoutFooter extends Component {

  render(props, state) {
    const {config} = props;
    return <section class="is-footer">
      <div class="container">
        <div class="columns" data-aos-speed="3" data-aos="fade-up" data-aos-easing="ease" data-aos-anchor-placement="top-center">
          <div class="column is-community">
            <h4 class="title is-1">Community</h4>
            <p>
              <a href="https://twitter.com/viacoin" title="Viacoin Twitter" target="_blank"><TwitterIcon /></a>
              <a href="https://medium.com/@viacoin" title="Viacoin Medium" target="_blank"><MediumIcon /></a>
              <a href="https://www.reddit.com/r/viacoin/" title="Viacoin Reddit" target="_blank"><RedditIcon /></a>
              <a href="https://bitcointalk.org/index.php?topic=699278.0" title="Viacoin Bitcoin Talk" target="_blank"><BitcoinTalkIcon /></a>
            </p>
            <br /><br />
            <h4 class="title is-1">Contact</h4>
            <p><a class="has-text-white" href="mailto:info@viacoin.org" title="Viacoin">info@viacoin.org</a></p>
          </div>
          <div class="column is-development">
            <h4 class="title is-1">Development</h4>
            <p>
              <a class="button is-medium is-link" href="https://github.com/viacoin/" title="Viacoin Github" target="_blank">Viacoin Github</a>
              <a class="button is-medium is-link" href="https://github.com/viacoin/viacoin/releases" title="All releases" target="_blank">Viacoin Core All releases</a>
              <a class="button is-medium is-link" href="https://github.com/vianetwork/" title="Via L2 zkEVM Rollup Github" target="_blank">Via L2 zkEVM Rollup Github (new)</a>
              <a class="button is-medium is-link" href="https://docs.onvia.org/?utm_source=viacoin.org&utm_medium=referral&utm_campaign=announcement-2025-08&utm_content=footer-development" title="Via L2 Gitbook docs" target="_blank" rel="noopener">New Via L2 | Gitbook docs</a>
              <a class="button is-medium is-link" href="https://blog.onvia.org" title="Via L2 zkEVM Rollup Blog" target="_blank">Via L2 zkEVM Rollup | Blog (new)</a>
              <a class="button is-medium is-link" href="https://buildonvia.org/?utm_source=viacoin.org&utm_medium=referral&utm_campaign=announcement-2025-08&utm_content=footer-development" title="Build on Via — developer portal" target="_blank" rel="noopener">New Via L2 | Build on Via</a>
            </p>
          </div>
        </div>
      </div>
      <div class="is-mention has-text-centered">
        <Logo circle="true" />
        <p>Viacoin is an open-source Bitcoin blockchain based open-source project. Get involved on Github!</p>
        <p class="is-copyright">© 2021 Viacoin. All Rights Reserved</p>
      </div>
    </section>;
  }
}

/*
<div class="columns" data-aos-speed="3" data-aos="fade-up" data-aos-easing="ease" data-aos-anchor-placement="top-center">
  <div class="column is-donate">
    <h4 class="title is-1">Donate</h4>
    <p>
      Viacoin has been funded by team and community since 2014. You can contribute in order to help us to expand the team faster or to increase our marketing actions. We plan to give you transparency on the way community funds will be allocated.
    </p>
    <p><Donate currencies={config}/></p>
  </div>
  <div class="column is-contact">
    <h4 class="title is-1">Contact</h4>
    <p><a class="has-text-white" href="mailto:info@viacoin.org" title="Viacoin">info@viacoin.org</a></p>
  </div>
</div>

*/

//   <p>
    // <a href="https://github.com/viacoin/viacoin/" title="Viacoin Github" target="_blank"><GithubIcon /></a>
  // </p>
// <br />
// <h4 class="title is-1">Latest News</h4>
// <p><a class="has-text-white" href="https://medium.com/@viacoin" title="Latest News" target="_blank">https://medium.com/@viacoin</a></p>
