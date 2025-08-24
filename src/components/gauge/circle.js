import { h, Component } from 'preact';

import Gauge from "svg-gauge";

import "./circle.sass"


const defaultOptions = {
  min: 0,
  max: 100,
  dialStartAngle: -90,
  dialEndAngle: -90.001,
  animDuration: 1,
  label: function(value) {
    return (Math.round(value * 100) / 100).toFixed() + ' %';
  }
};

export default class GaugeCircle extends Component {
  componentDidMount() {
    const isFirefox = typeof InstallTrigger !== 'undefined';
    this.renderGauge(this.props);
    // Firefox hack to replace letter-spacing on svg text
    if (isFirefox) {
      this.base.querySelector(".value-text").setAttribute("textLength", 60)
    }
  }

  shouldComponentUpdate(nextProps, nextState) {
    const {props} = this;
    if(props.value !== nextProps.value) {
      this.renderGauge(nextProps);
    }
    return false;
  }

  render(props, state) {
    const classes = "gauge-container " + props.classes
    return (
      <div class={ classes } ref={el => this.gaugeEl = el}></div>
    );
  }

  renderGauge(props) {
    const gaugeOptions = Object.assign({}, defaultOptions, props);
    if(!this.gauge) {
      this.gauge = Gauge(this.gaugeEl, gaugeOptions);
    }
    this.gauge.setValue(props.min || gaugeOptions.min);
    this.gauge.setValueAnimated(props.value, gaugeOptions.animDuration);
  }
}
