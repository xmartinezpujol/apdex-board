import Component from './../Component';
import AppItem from './../AppItem/AppItem';

import './Host.css';

class Host extends Component {
  constructor(props) {
    super(props);
    this.state = {
      host: props.host,
      apps: props.apps,
      appItems: [],
    };
    this.init();
  }

  init() {
    this.state.appItems = this.state.apps.map(item => (new AppItem(item)));
  }

  render(layoutMode) {
    return `
      <div class="host-container ${layoutMode}">
      <strong>${this.state.host}</strong>
        ${this.state.appItems.slice(0, 5).map(app => app.render()).join('')}
      </div>
   `;
  }
}

export default Host;
