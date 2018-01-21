import AppItem from './AppItem';
import mockAppItem from '../../data/MockDataApp';

const appItem = new AppItem(mockAppItem);
document.body.innerHTML = appItem.render();

describe('AppItem', () => {
  it('should handle the click event', () => {
    window.alert = jest.fn();
    document.querySelector('.app-item').onclick();
    expect(window.alert).toHaveBeenCalled();
  });

  it('has an apdex and is >= 0 & <= 100', () => {
    expect(appItem.state.apdex).toBeGreaterThan(0);
    expect(appItem.state.apdex).toBeLessThanOrEqual(100);
  });

  it('has a name', () => {
    expect(appItem.state.name).toBeDefined();
  });

  it('has a release version', () => {
    expect(appItem.state.version).toBeDefined();
  });

  it('renders correctly', () => {
    expect(appItem.render()).toMatchSnapshot();
  });
});
