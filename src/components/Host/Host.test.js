import Host from './Host';
import mockHost from '../../data/MockHost';
import appConfig from './../../config/Constants';

const host = new Host(mockHost);

document.body.innerHTML = host.render();

describe('Host', () => {
  it(`has a name`, () => {
    expect(host.state.name).toBeDefined();
  });

  it(`should have in memory ${appConfig.MAX_APPS_APDEX_DESC} Apps (max)`, () => {
    expect(host.state.appItems.length)
      .toBeLessThanOrEqual(appConfig.MAX_APPS_APDEX_DESC);
  });

  it(`should render only ${appConfig.MAX_APPS_BY_HOST} Apps (max)`, () => {
    expect(document.querySelectorAll('div.app-item').length)
      .toBeLessThanOrEqual(appConfig.MAX_APPS_BY_HOST);
  });

  it('renders correctly', () => {
    expect(host.render('grid')).toMatchSnapshot();
  });

  it('should adapt list style when layout is changed', () => {
    document.body.innerHTML = host.render('list');
    expect(document.getElementsByClassName('host-container')[0].classList.contains('list'))
      .toBe(true);
  });
});
