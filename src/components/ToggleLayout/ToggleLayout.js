import Component from './../Component';

import './ToggleLayout.css';

class ToggleLayout extends Component {
  constructor() {
    super();
    this.state = {
      layoutColumn: false,
    };
  }

  handleToggle() {
    this.state.layoutColumn = !this.state.layoutColumn;
    document.componentReg[0].update(this.state.layoutColumn);
    document.componentReg[this._id - document.currentState].update();
  }

  update() {
    document.getElementById(`toggle-${this._id}`).outerHTML =
      document.componentReg[this._id - document.currentState].render();
  }

  render() {
    const toggleWidth = this.state.layoutColumn ? 'active' : '';

    return `
      <div id="toggle-${this._id}" class="toggle-layout ${toggleWidth}">
        <input
          name="layout-mode"
          type="checkbox"
          ${this.state.layoutColumn === true ? 'checked' : ''}
          onClick="document.componentReg[${this._id - document.currentState}].handleToggle()"
        />
        <span class="checkmark"></span>
          <label name="layout-mode">
            ${this.state.layoutColumn === true ? 'Show as an awesome grid' : 'Show as list'}
          </label>
      </div>
   `;
  }
}

export default ToggleLayout;
