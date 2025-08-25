import { h, Component } from 'preact';
import AlloyFinger from 'alloyfinger';

import './styles.sass';


export default class SliderIntro extends Component {
  constructor() {
    super();
    this.toggleControls = this.toggleControls.bind(this);
    this.next = this.next.bind(this);
    this.previous = this.previous.bind(this);
    this.setSlide = this.setSlide.bind(this);
    this.hiddenClass = "is-hidden";
    this.af = null;

    this.state = {
      ival : 0,
      active: 0,
      slides: null,
      prev: null,
      next: null
    }
  }

  componentDidMount() {
    const slides = this.base.querySelectorAll(".slide") || [];
    const that = this;
    this.af = new AlloyFinger(this.base, {
      swipe: function (evt) {
        if (evt.direction == "Right") {
          that.previous();
        } else {
          that.next();
        }
      }
    });

    if (slides.length > 0) {
      const prev = this.base.querySelector(".prev");
      const next = this.base.querySelector(".next");

      slides[0].classList.remove(this.hiddenClass);

      this.setState({
        slides: slides,
        prev: prev,
        next: next
      });
    }

    this.toggleControls();

    slides.forEach(el => {
      setTimeout(() => {
          const els = el.querySelectorAll(".is-aleatory");
          if (els.length > 0) {
            const random = els[Math.floor(Math.random()*els.length)];
            random.classList.add('is-selected');
          }
        });
      }, 100);

    // this.state.ival = setInterval(()=> {
    //   this.next()
    // }, 8000);
  }

  componentDidUnMount() {
    this.af = this.af.destroy();
     window.clearInterval(this.state.ival);
  }

  setSlide() {
    this.state.slides.forEach((element, idx) => {
      if (this.state.active == idx) {
        element.classList.remove(this.hiddenClass)
      } else {
        element.classList.add(this.hiddenClass)
      }
    });
  }

  next() {
    if (this.state.active < this.state.slides.length - 1) {
      this.state.active++
      this.setSlide();
      this.toggleControls();
    } else {
      this.state.active = -1
    }
  }
  previous() {
    if (this.state.active > 0) {
      this.state.active--
      this.setSlide();
      this.toggleControls();
    } else {
      this.state.active = length(this.state.slides) + 1
    }
  }

  toggleControls() {
    if (this.state.active == 0 ) {
      this.state.prev.classList.add(this.hiddenClass);
      this.state.next.classList.remove(this.hiddenClass);
    } else if (this.state.active == this.state.slides.length - 1) {
      this.state.prev.classList.remove(this.hiddenClass);
      this.state.next.classList.add(this.hiddenClass);
    } else {
      if (this.state.prev.classList.contains(this.hiddenClass)){
        this.state.prev.classList.remove(this.hiddenClass);
      }
      if (this.state.next.classList.contains(this.hiddenClass)){
        this.state.next.classList.remove(this.hiddenClass);
      }
    }
  }

  navigation(){
    return <div class="navigation"></div>
  }

  renderSlides(){
    // Defensive programming: check if config and slider data exist
    if (!this.props.config || !this.props.config.slider || !this.props.config.slider.slides) {
      // Return fallback slides if config is missing
      const fallbackSlides = [
        "Viacoin - Fast, secure digital currency",
        "Lightning Network enabled for instant transactions"
      ];
      return fallbackSlides.map(slide => {
        return <div class="slide is-hidden has-text-centered" dangerouslySetInnerHTML={{__html: slide}}></div>
      });
    }
    
    return this.props.config.slider.slides.map(slide => {
      return <div class="slide is-hidden has-text-centered" dangerouslySetInnerHTML={{__html: slide}}></div>
    });
  }

  render(props, state) {
    const slides = this.renderSlides();
    return <div class="slider">
      <div class="container">
        {slides}
      </div>
      <span class="prev" onclick={this.previous}>
        <svg viewBox="0 0 50 80">
          <polyline fill="none" points="45.63,75.8 0.375,38.087 45.63,0.375 "/>
        </svg>
      </span>

      <span class="next" onclick={this.next}>
        <svg viewBox="0 0 50 80">
          <polyline fill="none" stroke="#FFFFFF" stroke-width="1" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "/>
        </svg>
      </span>
    </div>;
  }
}
