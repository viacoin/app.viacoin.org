import { h, Component } from 'preact';

import './styles.sass'


export default class Picture extends Component {
  render(props, state) {
    const circle = props.circle || false;
    const text = props.text || false;
    return <span class="has-svg-align">
      <svg xmlns="http://www.w3.org/2000/svg" class="logo-svg" viewBox="0 0 1000 1000">
        {circle &&
          <path class="logo-svg-circle" d="M500 125a374.998 374.998 0 0 1 375 375 374.998 374.998 0 0 1-375 375 374.998 374.998 0 0 1-375-375c-.001-207.107 167.893-375.001 375-375zm0-30C276.324 94.999 94.999 276.324 95 500a404.998 404.998 0 0 0 405 405 404.998 404.998 0 0 0 405-405A404.998 404.998 0 0 0 500 95z"/>
        }
        <path class="logo-svg-icon" d="M471.875 561.786h56.25L500 628.928zM300 310l50 117.5h-50v50.357h71.354l14.324 33.572H300v50.357h107.031L500 780l92.969-218.214H700V511.43h-85.678l14.324-33.572H700V427.5h-50L700 310h-66.666l-84.115 201.429H450.78L366.666 310z"/>
      </svg>
      {text &&
        <span class="logo-text">VIACOIN</span>
      }
    </span>
  }
}
