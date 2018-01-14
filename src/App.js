import dataAPI from './data/host-app-data.json';

import Component from './components/Component';
import Host from './components/Host/Host';
import ToggleLayout from './components/ToggleLayout/ToggleLayout';

import appData from './data/MockDataApp';

import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: dataAPI,
      hosts: [],
      toggle: null,
    };
    this.addDOMEvents();
    this.init();
  }

  addDOMEvents() {
    document.addEventListener('keypress', (e) => {
      const keyCode = e.which;
      if (keyCode === 43) {
        this.addAppToHosts(appData);
        this.init();
        document.componentReg[0].update();
      }
      if (keyCode === 45) {
        this.removeAppToHosts('New Test App - Lorem - Ipsum, and Ipsums');
        this.init();
        document.componentReg[0].update();
      }
    }, false);
  }

  init() {
    this.destroy();
    this.state.hosts = this.getHostsList()
      .map(host => (new Host({ host, apps: this.getTopAppsByHost(host) })));
    this.state.toggle = new ToggleLayout().render();
  }

  getHostsList() {
    const hostsList = [];
    this.state.data.forEach((app) => {
      app.host.forEach((host) => {
        if (hostsList === [] || !hostsList.includes(host)) {
          hostsList.push(host);
        }
      });
    });

    this.state.hosts = hostsList;

    return hostsList;
  }

  getTopAppsByHost(hostname) {
    return this.state.data
      .filter(app => (app.host.includes(hostname)))
      .sort((a, b) => (b.apdex - a.apdex))
      .slice(0, 25);
  }

  addAppToHosts(app) {
    this.removeAppToHosts(app.name);
    this.state.data.push(app);
  }

  removeAppToHosts(appName) {
    this.state.data = this.state.data.filter(app => (app.name !== appName));
  }

  update(layoutChange) {
    document.getElementById('0').outerHTML = document.componentReg[0].render(layoutChange);
  }

  render(layoutChange) {
    return `
      <div id="${this._id}" class="app-container">
        <h1>Apps by Host</h1>
          ${this.state.toggle}
        <div class="app-host-list ${layoutChange === true ? 'column' : 'grid'}">
          ${this.state.hosts.map(host => host.render(layoutChange === true ? 'column' : 'grid')).join('')}
        </div>
      </div>
   `;
  }
}

export default App;
