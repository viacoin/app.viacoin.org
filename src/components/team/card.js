import { h, Component } from 'preact';

import GithubIcon from 'components/icons/social/github';
import TwitterIcon from 'components/icons/social/twitter';
import LinkedinIcon from 'components/icons/social/linkedin';

import './styles.sass'



export default class TeamCard extends Component {

  icons(config) {
    return config.icons.map((i, idx) => {
      if (i == "GithubIcon") {
        return <a href={config.url[idx]} target="_blank" class="card-footer-item"><GithubIcon /></a>
      } else if (i == "TwitterIcon") {
        return <a href={config.url[idx]} target="_blank" class="card-footer-item"><TwitterIcon /></a>
      } else if (i == "LinkedinIcon") {
        return <a href={config.url[idx]} target="_blank" class="card-footer-item"><LinkedinIcon /></a>
      }
    });
  }

  render(props, state) {
    const {name, job, picto, icons, url, index} = props;
    const title = name + " - " + job;
    const socialIcons = this.icons(props);
    const speed = index * 100
    return <article class="card has-text-centered">
      <div class="card-image" data-aos="flip-left" data-aos-easing="ease" data-aos-anchor-placement="top-center" data-aos-duration="0">
        <img src={picto} alt={title} title={title} />
      </div>
      <div class="card-content is-hidden-desktop" data-aos="fade-up" data-aos-easing="ease" data-aos-anchor-placement="bottom-bottom" data-aos-duration={speed}>
        <div class="media-content has-text-centered">
          <p class="title is-4">{name}</p>
          <p class="subtitle is-6">{job}</p>
        </div>
      </div>
      <div class="card-content is-hidden-mobile" data-aos="fade-up" data-aos-easing="ease" data-aos-anchor-placement="top-center" data-aos-duration={speed}>
        <div class="media-content has-text-centered">
          <p class="title is-4">{name}</p>
          <p class="subtitle is-6">{job}</p>
        </div>
      </div>
      <footer class="card-footer is-hidden-desktop" data-aos="fade-in" data-aos-easing="ease" data-aos-anchor-placement="bottom-bottom">
        { socialIcons }
      </footer>
      <footer class="card-footer is-hidden-mobile" data-aos="fade-in" data-aos-easing="ease" data-aos-anchor-placement="top-center">
        { socialIcons }
      </footer>
    </article>
  }
}
