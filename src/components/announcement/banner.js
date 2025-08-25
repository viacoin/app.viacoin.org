import { h, Component } from 'preact';
import './styles.sass';

export default class AnnouncementBanner extends Component {
  constructor() {
    super();
    this.dismiss = this.dismiss.bind(this);
    this.state = { visible: true };
  }

  componentDidMount() {
    // Add body class to prevent scrolling when overlay is active
    if (this.state.visible) {
      document.body.classList.add('overlay-active');
    }
  }

  componentWillUnmount() {
    // Clean up body class when component unmounts
    document.body.classList.remove('overlay-active');
  }

  dismiss(e) {
    if (e && e.preventDefault) e.preventDefault();
    // Remove body class before hiding overlay
    document.body.classList.remove('overlay-active');
    this.setState({ visible: false });
  }

  render(props, state) {
    if (!state.visible) return null;
    return (
      <div class="via-l2-banner-overlay" role="dialog" aria-modal="true" aria-label="Announcement: Viacoin is becoming Via L2 | Sovereign Validity zkEVM Rollup for Bitcoin">
        <div class="banner-backdrop" onclick={this.dismiss}></div>
        <div class="via-l2-banner" role="region" aria-label="Announcement: Viacoin is becoming Via L2 | Sovereign Validity zkEVM Rollup for Bitcoin" data-banner="via-l2-announcement">
          <div class="container">
            <div class="banner-inner">
              <div class="banner-text">
                <h1 class="announcement-title"><strong>Viacoin transitions into Via L2 | Sovereign Validity zkEVM Rollup for Bitcoin</strong></h1>
              <div class="banner-ctas">
                <a class="banner-link secondary" href="https://docs.onvia.org/?utm_source=viacoin.org&amp;utm_medium=referral&amp;utm_campaign=announcement-2025-08&amp;utm_content=banner-secondary">Via L2 Rollup Gitbook Documentation</a>
                <a class="banner-link secondary" href="https://blog.onvia.org/introducing-via-a-bitcoin-l2-sovereign-zk-rollup/">Blog post announcement</a>
                <a class="banner-link secondary" href="https://buildonvia.org/?utm_source=viacoin.org&amp;utm_medium=referral&amp;utm_campaign=announcement-2025-08&amp;utm_content=banner-primary">New Site: buildonvia.org</a>
                <a class="banner-link secondary" href="https://x.com/buildonvia">Follow Via on X / Twitter</a>
              </div>
                
                <p>Viacoin had strengths, flexibility, and innovations, but running a separate blockchain came with its own set of challenges. Bitcoin has a massive hash power and global adoption, while it is true that Viacoin relied on auxiliary proof-of-work to thrive for years, while other proof-of-work coins could not. Auxiliary proof-of-work also enabled the Dogecoin chain to remain operational for more than a decade without halting. Viacoin was still based on Bitcoin and relied on large, centralized exchanges to maintain its value, while also incentivizing miners to continue mining.</p>
                <p><b>A lot has changed over the past decade as Bitcoin has opened up potential layer 2 solutions that could extend its capabilities without bloating the chain.</b></p>
                <p>Take Taproot, which became active in 2021. It brought better scripting and multi-signature efficiency, making more complex applications possible. The Lightning Network is made possible by CheckLockTimeVerify (Viacoin was the first cryptocurrency to integrate OP_CHECKLOCKTIMEVERIFY BIP 65 proposal), which shows that Layer 2 can facilitate fast and inexpensive transactions.</p>
                <p>Even inscriptions, such as Ordinals, proved that you could embed metadata on Bitcoin. Meanwhile, rollups and modular architecture were proving their worth on other chains, offering scalability and functionality while leaning on a secure settlement layer.</p>
                <p><b>Rollups, which process transactions off-chain and settle them on Bitcoin instead of Ethereum, could keep things fast and cheap without sacrificing security or bloating the chain for everyone.</b></p>
                <p>Then we started to wonder. Why keep pushing when we could <b>build on Bitcoin itself?</b> Running an altcoin based on Bitcoin, while Bitcoin's ecosystem started to expand slowly. Viacoin gave us a head start, allowing us to test ideas like CLTV and ClearingHouse, but Bitcoin's security, hash power, and user base were unparalleled.</p>
                <p><b>Ultimately, we decided to build Via (2.0) as our own Bitcoin Layer 2 solution.</b>By using zero-knowledge (ZK) proofs and anchoring state commitments to Bitcoin.</p>
                <p>We can process transactions off-chain extremely quickly and at a low cost, settling them on Bitcoin as the final settlement layer, rather than any other chain.</p>
                <p>Bitcoin itself, being the most decentralized and superior sound asset backed by proof-of-work, ensures integrity through real-world energy expenditure, making it grounded in physics rather than committee votes.</p>
                <p><b>By anchoring our sovereign rollup's state root into Bitcoin, Via inherits Bitcoin's finality guarantees and Proof-of-Work security, echoing the spirit of AuxPow, without bloating Bitcoin's UTXO set or incurring massive fees every batch.</b></p>
                <p>After all, why would we want to build on the "second best" if we can build on the best? The second-best chain is up for debate, but the best, without a doubt, is Bitcoin.</p>
                <p><b>Want smart contracts?</b> We can have them, <b>echoing the spirit of both Counterparty and ClearingHouse.</b> We'll use Taproot for multi-signatures and inscriptions for metadata.</p>
                <p><b>EVM-Compatible?</b> Sure. Port existing dApps? Yes</p>
                <p>It's not about ditching Viacoin's legacy, which cannot be explained in text. You just had to be there at the time.</p>
                <p>However, it's about adapting and evolving. We're taking the flexibility and practicality with us. Take Ethereum, for example. A large part of its market cap and TVL is dominated by Ethereum Layer 2, and the upside for Bitcoin L2s is huge.</p>
                <p><b>Via as a layer 2 would enable us to scale up, as we are not just building a new layer on top of Bitcoin, but also an entire DeFi ecosystem. Bringing EVM smart contracts to Bitcoin.</b></p>
                <p>The holders still owning legacy Viacoins will be rewarded with the airdrop or a swap for the new Via token, which has a vision stronger than before.</p>
              </div>

              <button class="banner-close" aria-label="Dismiss announcement" title="Dismiss announcement" onclick={this.dismiss}>&times;</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}