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

  handleAlert() {
    alert(`Release number: ${this.state.version}`);
  }

  render() {
    return `
      <div
        class="app-item"
        onClick="document.componentReg[${this._id - document.currentState}].handleAlert()"
      >
        <div class="app-item-apdex">${this.state.apdex}</div>
        <div>${this.state.name}</div>
      </div>
    `;
  }
}

export default AppItem;
