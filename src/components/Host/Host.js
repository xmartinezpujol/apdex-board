import Component from './../Component';
import AppItem from './../AppItem/AppItem';

import appConfig from './../../config/Constants';

import './Host.css';

class Host extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: props.name,
      apps: props.apps,
      appItems: [],
    };
    this.init();
  }

  init() {
    this.state.appItems = this.state.apps.map(item => (new AppItem(item)));
  }

  render(layoutMode = 'grid') {
    return `
      <div class="host-container ${layoutMode}">
        <strong>${this.state.name}</strong>
          ${this.state.appItems.slice(0, appConfig.MAX_APPS_BY_HOST).map(app => app.render()).join('')}
      </div>
   `;
  }
}

export default Host;
