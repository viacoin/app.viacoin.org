import { h, Component } from 'preact';

import './styles.sass';


export default class Ribbon extends Component {

  render(props, state) {
    const classes = "corner-ribbon " + props.classes;    
    const data = props.children[0];
    return <div class={classes}>
      {data}
    </div>;
  }
}
