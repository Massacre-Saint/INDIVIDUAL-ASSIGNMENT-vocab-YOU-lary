import renderToDOM from '../helpers/renderToDom';

const domBuilder = () => {
  const domString = `
  <div id="navbar"></div>
  <div id="main-container">
      <div id="filters"></div>
      <div id="form-container"></div>
      <div id="crud-content"></div>
      <div id="view"></div>
    </div>
    <div id="footer"</div>
  `;
  renderToDOM('#app', domString);
};

export default domBuilder;
