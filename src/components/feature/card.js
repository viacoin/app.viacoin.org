import { h, Component } from 'preact';

import './styles.sass'


export default class FeatureCard extends Component {
  constructor() {
    super();
    this.toggleActiveClass = this.toggleActiveClass.bind(this);
    this.enableActiveClass = this.enableActiveClass.bind(this);
    this.disableActiveClass = this.disableActiveClass.bind(this);
    this.activeClassName = "is-active";
    this.state = {
      activeClass: ""
    }
  }

  enableActiveClass(e) {
    this.setState({ activeClass: this.activeClassName });
  }

  disableActiveClass(e) {
    this.setState({ activeClass: "" });
  }

  toggleActiveClass(e) {
    const currentActiveClass = (this.state.activeClass == "") ? this.activeClassName : "";
    e.target.closest(".columns").querySelectorAll("." + this.activeClassName).forEach(c => {
      c.classList.remove(this.activeClassName);
    });
    this.setState({ activeClass: currentActiveClass });
  }

  render(props, state) {
    const {title, text } = props;
    const icon = this.props.children[0];
    const classes = "card is-vcentered has-text-centered " + state.activeClass;
    return <article class={ classes } ontouchstart={ this.toggleActiveClass } onmouseover={ this.enableActiveClass } onmouseout={ this.disableActiveClass }>
      <div class="card-image">
        <span class="is-icon">{ icon }</span>
        <h4 class="title is-4">{ title }</h4>
      </div>
      <div class="card-content">
        <div class="content">{ text }</div>
      </div>
      <footer class="card-footer">
        <p class="card-footer-item">...</p>
      </footer>
    </article>
  }
}
