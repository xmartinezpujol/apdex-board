import App from './App';

const AppView = new App();

function render() {
  document.body.innerHTML = AppView.render();
};

render();
