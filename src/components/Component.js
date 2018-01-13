document.componentReg = [];
document.nextId = 0;

class Component {
  constructor() {
    this._id = document.nextId++;
    document.componentReg[this._id] = this;
  }
}

export default Component;
