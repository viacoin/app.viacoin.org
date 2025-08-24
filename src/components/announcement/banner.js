import { h, Component } from 'preact';
import './styles.sass';


const STORAGE_KEY = 'via:banner:via-l2:2025-08:dismissed';
const COOKIE_NAME = 'via_banner_via_l2_2025_08_dismissed';
const TTL_MS = 90 * 24 * 60 * 60 * 1000; // 90 days

function setCookie(name, value, maxAgeSec) {
  document.cookie = `${name}=${encodeURIComponent(value)}; Max-Age=${maxAgeSec}; Path=/; SameSite=Lax`;
}

function getCookie(name) {
  const match = document.cookie.match(new RegExp('(?:^|; )' + name.replace(/[-[\]{}()*+?.,\\^$|#\\s]/g, '\\\\$&') + '=([^;]*)'));
  return match ? decodeURIComponent(match[1]) : null;
}

export default class AnnouncementBanner extends Component {
  constructor() {
    super();
    this.dismiss = this.dismiss.bind(this);
    this.state = { visible: true };
  }

  componentDidMount() {
    try {
      const params = new URLSearchParams(window.location.search);
      if (params.get('viaBanner') === 'show') {
        this.setState({ visible: true });
        return;
      }
      if (params.get('viaBanner') === 'reset') {
        if (window.localStorage) localStorage.removeItem(STORAGE_KEY);
        setCookie(COOKIE_NAME, '', 0);
        this.setState({ visible: true });
        return;
      }

      const now = Date.now();

      // localStorage check
      if (window.localStorage) {
        const ls = localStorage.getItem(STORAGE_KEY);
        if (ls) {
          try {
            const data = JSON.parse(ls);
            if (data && data.expiresAt && now < data.expiresAt) {
              this.setState({ visible: false });
              return;
            }
          } catch (e) { /* ignore parse errors */ }
        }
      }

      // Cookie fallback check
      const c = getCookie(COOKIE_NAME);
      if (c) {
        const expiresAt = parseInt(c, 10);
        if (!isNaN(expiresAt) && now < expiresAt) {
          this.setState({ visible: false });
          return;
        }
      }

      // Default: visible
      this.setState({ visible: true });
    } catch (e) {
      // Fail open
      this.setState({ visible: true });
    }
  }

  persistDismissal() {
    const expiresAt = Date.now() + TTL_MS;
    try {
      if (window.localStorage) {
        localStorage.setItem(STORAGE_KEY, JSON.stringify({ dismissed: true, expiresAt }));
      }
    } catch (e) { /* ignore quota */ }
    try {
      setCookie(COOKIE_NAME, String(expiresAt), Math.floor(TTL_MS / 1000));
    } catch (e) { /* ignore */ }
  }

  dismiss(e) {
    if (e && e.preventDefault) e.preventDefault();
    this.persistDismissal();
    this.setState({ visible: false });
  }

  render(props, state) {
    if (!state.visible) return null;
    return (
      <div class="via-l2-banner" role="region" aria-label="Announcement: Viacoin is becoming Via L2" data-banner="via-l2-announcement">
        <div class="container">
          <div class="banner-inner">
            <div class="banner-text">
              <strong>Viacoin is becoming Via L2:</strong> a sovereign validity‑proof zkEVM rollup for Bitcoin with Celestia data availability and a distributed verifier network—delivering EVM programmability, high throughput, and low fees with Bitcoin‑anchored commitments and reorg‑bounded finality.
            </div>
            <div class="banner-ctas">
              <a class="banner-link primary" href="https://buildonvia.org/?utm_source=viacoin.org&utm_medium=referral&utm_campaign=announcement-2025-08&utm_content=banner-primary">Explore Via L2</a>
              <a class="banner-link secondary" href="https://docs.onvia.org/?utm_source=viacoin.org&utm_medium=referral&utm_campaign=announcement-2025-08&utm_content=banner-secondary">Read the Via L2 Documentation</a>
            </div>
            <button class="banner-close" aria-label="Dismiss announcement" title="Dismiss announcement" onclick={this.dismiss}>&times;</button>
          </div>
        </div>
      </div>
    );
  }
}