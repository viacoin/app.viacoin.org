import preact from 'preact';

import Modal from 'components/modal/window';

import "./styles.sass"

/** @jsx preact.h */

export default class Donate extends preact.Component {
  constructor() {
    super();
    this.open = this.open.bind(this);
  }

  open(e) {
    preact.render((
      <Modal classes="modal is-active is-donate">{this.modal()}</Modal>
    ), document.body);
  }

  currencies() {
    return this.props.currencies.map(d => {
      return <div class="columns">
        <div class="column">
          <span class="tag is-link">{d.currency}</span> - {d.name}
        </div>
        <div class="column has-text-left">{d.address}</div>
      </div>
    });
  }

  modal() {
    const currencies = this.currencies();
    return <article class="box is-donate-content">
      <h4 class="title is-4">Donate by prefered currency :</h4>
      {currencies}
    </article>;
  }

  render(props, state) {
    return <a class="button is-large is-link" onclick={this.open}>Make a donation</a>
  }
}
