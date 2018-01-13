import Component from './../Component';
import AppItem from './../AppItem/AppItem';

import './Host.css';

class Host extends Component {
  constructor(props) {
    super(props);
    this.state = {
      host: props.host,
      apps: props.apps,
    };
  }

  init() {
    return this.state.apps.map(item => (new AppItem(item)));
  }

  render() {
    return `
      <div class="host-container">
      <strong>${this.state.host}</strong>
        ${this.init().slice(0, 5).map(child => child.render()).join('')}
      </div>
   `;
  }
}

export default Host;
