import Component from './../Component';

import './AppItem.css';

class AppItem extends Component {
  constructor(props) {
    super();
    this.state = {
      name: props.name,
      version: props.version,
      apdex: props.apdex,
      contributors: props.contributors,
    };
    this.handleAlert = this.handleAlert.bind(this);
  }

  handleAlert(num) {
    alert(`Release number: ${num}`);
  }

  update(newState) {
    this.state.name = newState;
    document.getElementById(this._id).innerHTML = document.componentReg[this._id].render();
  }

  render() {
    return `
      <div id=${this._id} class="app-item">
        <div
          onClick="document.componentReg[${this._id}].handleAlert(${this.state.version})"
          style="display: flex; margin: 23px 0px"
        >
          <div class="app-item-apdex">${this.state.apdex}</div>
          <div>${this.state.name}</div>
        </div>
      </div>
    `;
  }
}

export default AppItem;
