import preact from 'preact';

import Media from 'components/roadmap/media'

import WindowsIcon from 'components/icons/os/windows';
import MacOsIcon from 'components/icons/os/macosx';
import LinuxIcon from 'components/icons/os/linux';
import ChromeOsIcon from 'components/icons/os/chrome-os';
import AndroidIcon from 'components/icons/os/android';
import WindowsPhoneIcon from 'components/icons/os/windows-phone';
import IosIcon from 'components/icons/os/ios';


import "./styles.sass"

/** @jsx preact.h */

export default class LayoutRoadmap extends preact.Component {

  medias(config) {
    const icons = {
      WindowsIcon,
      MacOsIcon,
      LinuxIcon,
      ChromeOsIcon,
      AndroidIcon,
      WindowsPhoneIcon,
      IosIcon,
    };
    return config.map((r, idx) => {
      const iconList = r.icons.map(i => {
        const Icon = icons[i];
        return <span class="icon">
          <Icon />
        </span>
      });
      return <Media title={r.title} text={r.text} progress={r.progress} index={idx}><p>{iconList}</p></Media>
    })
  }

  render(props, state) {
    const {config} = props;
    const medias = this.medias(config);
    return <section class="section is-roadmap" data-aos="fade-up" data-aos-easing="ease" data-aos-anchor-placement="top-center">
      <div class="container">
        <h3 class="title is-1 has-text-weight-light">
          <strong>2018</strong>
          FOCUSED ON <strong>
          IMPROVING</strong> <strong>PERFORMANCE</strong>
        </h3>
		    { medias }
      </div>
    </section>;
  }
}
