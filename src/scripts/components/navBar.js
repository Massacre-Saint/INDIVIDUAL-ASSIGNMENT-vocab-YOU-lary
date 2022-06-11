import renderToDOM from '../helpers/renderToDom';
import { logoutButton } from './buttons/logoutBtn';
import u from '../images/u.png';

// const toggleCategories = () => {
//   const hideCategories = document.querySelector('#toggle-categories');
//   hideCategories.setAttribute('hidden', 'true');
// };

const navBar = () => {
  const domString = `
    <nav class="navbar navbar-expand-lg bg-light">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">
      <img src="${u}" alt="logo" width="50px"/>
      </a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarSupportedContent">
        <ul class="navbar-nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a id="create-entry" class="nav-link" aria-current="page" href="#">Create Entry</a>
          </li>
          <li class="nav-item" id="entries">
            <a class="nav-link" href="#">Entries</a>
          </li>
          <li class="nav-item" id="categories">
            <a class="nav-link" href="#">Categories</a>
          </li>
        </ul>
        </div>
        <form class="d-flex" role="search">
          <input id="search" class="searchBar form-control me-2" type="search" placeholder="Search" aria-label="Search">
        </form>
        <div id="logout-btn">
        </div>
    </div>
  </nav>
  `;
  renderToDOM('#navbar', domString);
  logoutButton();
};

export default navBar;
