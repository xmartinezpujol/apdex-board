document.componentReg = [];
document.currentState = 0;
document.nextId = 0;

class Component {
  constructor() {
    this._id = document.nextId++;
    document.componentReg.push(this);
  }

  destroy() {
    document.currentState += document.componentReg.length - 1;
    document.componentReg = document.componentReg.slice(0, 1);
  }
}

export default Component;
