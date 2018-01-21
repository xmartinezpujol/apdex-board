import App from './App';

import mockAppItem from './data/MockDataApp';

const appView = new App();
const numHosts = appView.state.hosts.length;
document.body.innerHTML = appView.render();

describe('App', () => {
  it(`should render ${numHosts} hosts`, () => {
    expect(document.querySelectorAll('.host-container').length).toBe(numHosts);
  });

  it(`should render a layout toggler`, () => {
    expect(document.querySelectorAll('.toggle-layout').length).toBe(1);
  });

  it(`should render the page title`, () => {
    expect(document.querySelectorAll('.page-title').length).toBe(1);
  });

  it(`should render the user email`, () => {
    expect(document.querySelectorAll('.page-title').length).toBe(1);
  });

  it(`addAppToHosts() should add a new app to the global list of apps`, () => {
    const numApps = appView.state.data.length;
    appView.addAppToHosts(mockAppItem);
    expect(appView.state.data.length).toBe(numApps + 1);
  });

  it(`removeAppToHosts() should remove an app to the global list of apps`, () => {
    const numApps = appView.state.data.length;
    appView.removeAppToHosts('New Test App - Lorem - Ipsum, and Ipsums');
    expect(appView.state.data.length).toBe(numApps - 1);
  });
});