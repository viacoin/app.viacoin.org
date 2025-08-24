import { h, Component } from 'preact';
import './styles.sass';

export default class ParticlesBackground extends Component {
  componentDidMount() {
    this._isMounted = true;
    // ensure a clean slate if hot-reloaded or remounted
    this.destroyParticles();
    this.ensureParticlesScript();
    this.initParticles();
  }

  componentWillUnmount() {
    this._isMounted = false;
    if (this._retryTimer) {
      clearTimeout(this._retryTimer);
      this._retryTimer = null;
    }
    this.destroyParticles();
  }

  // Load particles.js via CDN to avoid module resolution issues
  ensureParticlesScript() {
    try {
      if (typeof window === 'undefined' || typeof document === 'undefined') return;
      if (document.getElementById('particlesjs-cdn')) return;
      const s = document.createElement('script');
      s.id = 'particlesjs-cdn';
      s.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
      s.async = true;
      s.onerror = () => {
        try { if (console && console.debug) console.debug('[Particles] CDN load failed'); } catch (_) {}
      };
      document.head.appendChild(s);
    } catch (_) {
      // no-op
    }
  }

  // Initialize particles.js with strict-mode-safe guards
  initParticles() {
    const w = typeof window !== 'undefined' ? window : undefined;
    if (!w || !this._isMounted) return;

    const attemptInit = () => {
      if (!this._isMounted) return;

      const fn = w.particlesJS || w.particlesJS; // global function provided by particles.js
      if (typeof fn !== 'function') {
        // Library not yet attached to window (or delayed by bundler). Retry shortly.
        this._retryTimer = setTimeout(attemptInit, 50);
        return;
      }

      try {
        // Proactively destroy any previous instances to avoid duplicates
        if (w.pJSDom && Array.isArray(w.pJSDom) && w.pJSDom.length) {
          for (let i = w.pJSDom.length - 1; i >= 0; i--) {
            const inst = w.pJSDom[i];
            try {
              if (inst && inst.pJS && inst.pJS.fn && inst.pJS.fn.vendors && inst.pJS.fn.vendors.destroypJS) {
                inst.pJS.fn.vendors.destroypJS();
              }
            } catch (e) {
              // swallow cleanup errors in strict mode
            }
            w.pJSDom.splice(i, 1);
          }
        }

        // Attempt initialization; suppress non-fatal strict mode violations
        fn('particles-js', this.getConfig());
      } catch (err) {
        // Suppress known strict-mode issues without breaking the visual effect
        // Keep noise to a minimum; log at debug level for troubleshooting if needed
        try {
          if (console && console.debug) console.debug('[Particles] init error suppressed:', err);
        } catch (_) {}
      }
    };

    attemptInit();
  }

  // Robust cleanup of particles.js instances
  destroyParticles() {
    const w = typeof window !== 'undefined' ? window : undefined;
    try {
      if (w && w.pJSDom && Array.isArray(w.pJSDom) && w.pJSDom.length) {
        for (let i = w.pJSDom.length - 1; i >= 0; i--) {
          const inst = w.pJSDom[i];
          try {
            if (inst && inst.pJS && inst.pJS.fn && inst.pJS.fn.vendors && inst.pJS.fn.vendors.destroypJS) {
              inst.pJS.fn.vendors.destroypJS();
            }
          } catch (e) {
            // ignore cleanup errors
          }
          w.pJSDom.splice(i, 1);
        }
      } else {
        // Fallback: remove any canvas children if present
        const host = typeof document !== 'undefined' ? document.getElementById('particles-js') : null;
        if (host) {
          while (host.firstChild) host.removeChild(host.firstChild);
        }
      }
    } catch (_) {
      // never let cleanup crash unmount
    }
  }

  // Original working particles.js v2 configuration (converted from the previous comment)
  getConfig() {
    return {
      particles: {
        number: { value: 80, density: { enable: true, value_area: 800 } },
        color: { value: '#ffffff' },
        shape: {
          type: 'circle',
          stroke: { width: 0, color: '#000000' },
          polygon: { nb_sides: 3 },
          image: { src: 'img/github.svg', width: 100, height: 100 }
        },
        opacity: {
          value: 0.5,
          random: true,
          anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false }
        },
        size: {
          value: 3,
          random: true,
          anim: { enable: true, speed: 0.5, size_min: 0.1, sync: false }
        },
        line_linked: {
          enable: false,
          distance: 150,
          color: '#ffffff',
          opacity: 0.4,
          width: 1
        },
        move: {
          enable: true,
          speed: 0.4,
          direction: 'none',
          random: true,
          straight: false,
          out_mode: 'out',
          bounce: false,
          attract: { enable: true, rotateX: 10000, rotateY: 10000 }
        }
      },
      interactivity: {
        detect_on: 'canvas',
        events: {
          onhover: { enable: false, mode: 'repulse' },
          onclick: { enable: true, mode: 'push' },
          resize: true
        },
        modes: {
          grab: { distance: 400, line_linked: { opacity: 1 } },
          bubble: { distance: 400, size: 40, duration: 2, opacity: 8, speed: 3 },
          repulse: { distance: 200, duration: 0.4 },
          push: { particles_nb: 4 },
          remove: { particles_nb: 2 }
        }
      },
      retina_detect: true
    };
  }

  render() {
    return <div id="particles-js"></div>;
  }
}
