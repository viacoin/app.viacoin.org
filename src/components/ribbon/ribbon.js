import preact from 'preact';

import './styles.sass';

/** @jsx preact.h */

export default class Ribbon extends preact.Component {

  render(props, state) {
    const classes = "corner-ribbon " + props.classes;    
    const data = props.children[0];
    return <div class={classes}>
      {data}
    </div>;
  }
}
