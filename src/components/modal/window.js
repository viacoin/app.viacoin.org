import preact from 'preact';

/** @jsx preact.h */

export default class Modal extends preact.Component {
  constructor() {
    super();
    this.close = this.close.bind(this);
  }

  close(e) {
    document.body.removeChild(e.target.parentNode);
  }

  render(props, state) {
    const {classes} = props;
    const dom = this.props.children[0];
    return <div class={classes}>
      <div class="modal-background"></div>
      <div class="modal-content">
        {dom}
      </div>
      <button class="modal-close is-large" aria-label="close" onclick={this.close}></button>
    </div>
  }
}
