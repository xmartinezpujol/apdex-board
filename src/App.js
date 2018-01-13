import dataAPI from './data/host-app-data.json';

import Component from './components/Component';
import Host from './components/Host/Host';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataAPI,
      hosts: [],
    };
  }

  init() {
    this.getHostsList();
    return this.state.hosts.map(host => (new Host({ host, apps: this.getTopAppsByHost(host) })));
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

  render() {
    return `
      <div class="app-container">
        <h1>Apps by Host</h1>
        <div class="app-host-list">
          ${this.init().map(child => child.render()).join('')}
        </div>
      </div>
   `;
  }
}

export default App;
