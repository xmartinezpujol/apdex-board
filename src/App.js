import dataAPI from './data/host-app-data.json';

import Component from './components/Component';
import AppItem from './components/AppItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: dataAPI,
      hosts: [],
    }
  }

  init(host) {
    return this.getTopAppsByHost(host).map(item => (new AppItem(item)));
  }

  getTopAppsByHost(hostname) {
    return this.state.data
      .filter(app => (app.host.includes(hostname)))
      .sort((a, b) => (b.apdex - a.apdex))
      .slice(0, 25);
  }

  getHostsList() {
    const hostsList = [];
    this.state.data.map((app) => {
      app.host.map(host => {
        if(hostsList === [] || !hostsList.includes(host)) {
          hostsList.push(host);
        }
      })
    });

    this.state.hosts = hostsList;

    return hostsList;
  }

  render() {
   return `
    <h1>Apps by Host</h1>
    <div>
      ${this.getHostsList().map(host => this.init(host).map(child => child.render()).join('')).join('')}
    </div>
   `;
  }
}

export default App;
