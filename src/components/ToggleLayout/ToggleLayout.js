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
    document.componentReg[this._id].update();
  }

  update() {
    document.getElementById(this._id).outerHTML = document.componentReg[this._id].render();
  }

  render() {
    return `
      <div id="${this._id}" class="toggle-layout">
        <input
          name="layout-mode"
          type="checkbox"
          ${this.state.layoutColumn === true ? 'checked' : ''}
          onClick="document.componentReg[${this._id}].handleToggle()"
        />
          <label name="layout-mode">
            ${this.state.layoutColumn === true ? 'Show as list' : 'Show as an awesome grid'}
          </label>
      </div>
   `;
  }
}

export default ToggleLayout;
