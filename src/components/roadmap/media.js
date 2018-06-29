import preact from 'preact';

import GaugeCircular from "components/gauge/circle";

import './styles.sass'

/** @jsx preact.h */

export default class RoadmapMedia extends preact.Component {

  constructor() {
    super();
    this.state = {
      ival: "",
      start: 0
    }
  }

  componentWillMount(){
    this.state.ival = setInterval(()=> {
      if (this.base.classList.contains("aos-animate")) {
        this.setState({ start: this.props.progress });
      } else if (!this.base.classList.contains("aos-animate") && this.props.progress > 0) {
        this.setState({ start: 0 });
      }
    }, 100);
  }

  componentWillUnMount(){
    window.clearInterval(this.state.ival)
    this.state.start = 0;
  }

  notificationColor(progress) {
    if(progress <= 30) {
      return "is-danger";
    }else if(progress <= 60) {
      return "is-warning";
    }else if(progress < 100) {
      return "is-info";
    }else {
      return "is-success";
    }
  }

  render(props, state) {
    const {progress, title, text, index} = props;
    const icons = this.props.children[0];
    const colorClass = this.notificationColor(progress)

    return <article class="columns is-vcentered" data-aos="fade-up" data-aos-easing="ease" data-aos-anchor-placement="bottom-bottom">
      <div class="column is-narrow is-hidden-mobile">
        <GaugeCircular value={ state.start } classes={ colorClass } />
      </div>
      <div class="column is-1 is-narrow is-hidden-mobile">
        <hr class={colorClass} />
      </div>
      <div class="column is-5 is-hidden-mobile">
        <p class="heading">{ title }</p>
        <p>{ text }</p>
        { icons }
      </div>
      <div class="column is-5 is-hidden-desktop">
        <p class="heading">{ title }</p>
        <p>{ text }</p>
        { icons }
      </div>
      <div class="column is-narrow is-hidden-desktop">
        <GaugeCircular value={ state.start } classes={ colorClass } />
      </div>
      <div class="column is-1 is-narrow is-hidden-desktop">
        <hr class={colorClass} />
      </div>
    </article>
  }
}
