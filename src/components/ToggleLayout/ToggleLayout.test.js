import ToggleLayout from './ToggleLayout';

const toggleLayout = new ToggleLayout();
document.body.innerHTML = toggleLayout.render();

describe('ToggleLayout', () => {
  it('starts unchecked', () => {
    expect(toggleLayout.state.layoutColumn).toBe(false);
  });

  it('renders correctly initial state', () => {
    expect(toggleLayout.render()).toMatchSnapshot();
  });

  // Toggle State
  it('changes layout mode on toggle', () => {
    document.componentReg[toggleLayout._id - document.currentState].handleToggle();
    expect(document.getElementById(`toggle-${toggleLayout._id}`).classList.contains('active')).toBe(true);
  });

  it('renders correctly the checked state', () => {
    expect(toggleLayout.render()).toMatchSnapshot();
  });
});

