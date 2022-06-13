import renderToDOM from '../helpers/renderToDom';

const createRender = () => {
  const domString = `
  <li class="nav-item dropdown">
    <a class="nav-link dropdown-toggle" href="#" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
      Dropdown
    </a>
    <ul class="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
      <li id="create-entry"><a class="dropdown-item" href="#">Create Entry</a></li>
      <li id="create-category"><a class="dropdown-item" href="#">Create Category</a></li>
    </ul>
  </li>
  `;
  renderToDOM('#createRender', domString);
};

export default createRender;
